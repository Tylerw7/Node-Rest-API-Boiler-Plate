const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()


//--------Create User-------------//
exports.createNewUser = async (req, res, next) => {
    const {username, email, password} = req.body
    
        try {
            const hashedPassword = await bcrypt.hash(password, 10)

             const newUser = await new User( {
                    username,
                    email,
                    password: hashedPassword,
                })

        await newUser.save()

            res.json({message: "New User Created!", newUser})
        } catch (err) {
            console.log(err)
            res.json({message: "There was an issue"})
        }
    }


//--------------Login User---------------/    
exports.userLogin = async (req, res, next) => {
    const {email, password} = req.body

    try {
        const response = await User.findOne({email})

        if (!response || !(await bcrypt.compare(password, response.password))) {
            return res.json({message: "Invalid Credentials"})
        }
         const token = jwt.sign({id: response._id, isAdmin: response.isAdmin, email: response.email}, process.env.JWT_KEY, {expiresIn: '2h'})

        res.json({message: "User Login Success!", token})
        } catch (err) {
            console.log(err)
        }
    }