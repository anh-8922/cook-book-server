import express from 'express';
import cors from 'cors';
//import dotenv from 'dotenv';
//import mongoose from 'mongoose';
import dbConnect from './src/config/db.js';
import recipeRoute from './src/routes/recipeRoute.js';
//import userRoutes from './routes/userRoutes.js';
//import authRoutes from './routes/authRoutes.js';

//dotenv.config();
dbConnect();

const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded ({extended : false}));

//app.use('/users', userRoutes);
app.use('/recipes', recipeRoute) 
//app.use('/auth', userRoutes)
//app.use("/uploads", express.static("./server/uploads"));

//app.use('/auth', userRoutes)
//app.use("/uploads", express.static("./server/uploads"));

app.get('/recipes/list', (req,res) => {
    res.send('Testing the server')
})
app.listen(5000, () => console.log('server is set to run at port 5000'))