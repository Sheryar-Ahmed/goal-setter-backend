const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');
const {errorHanlder} = require('./middlewares/errorMiddleware.js');
const connectDB = require('./config/db');
connectDB();
const app = express();
//added as middleware
app.use(cors({ origin: `${process.env.REACT_APP_BASE_URL}`, credentials: true }));

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) =>{
    res.send("GOAL SETTER API IS NOW LIVE.");
})
//other routes are in getRoutes file
app.use('/api/goals', require('./routes/getRoutes'));  // for goals
app.use('/api/users', require('./routes/userRoutes')); // for users
//it must be after all routes because error comes after we hit the route.
app.use(errorHanlder)

app.listen(port, () => console.log(`server is running on ${port}`))