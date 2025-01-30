const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

    // Custom CORS configuration
const corsOptions = {
    origin: ['http://localhost:3000', 'https://yourdomain.com'], // Allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow cookies & credentials
  };


  //CORS
  app.use(cors(corsOptions));

  app.use(express.urlencoded({extended: true}));
  app.use(express.json());



//connect to mongoDB database and start server
  mongoose.connect()//<--Connection string
        .then(() => {
        console.log('Server Connected')
        app.listen(5000, () => {
            console.log('Server running on port 5000')
        })
        }).catch((err) => console.log('Error:', err.message))