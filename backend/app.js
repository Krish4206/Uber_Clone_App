// const dotenv = require('dotenv');
// dotenv.config();
// const express = require('express');
// const cors = require('cors')
// const app = express()
// const connectToDb = require('./db/db')
// const userRoutes = require('./routes/user.routes')


// // Connect to MongoDB
// connectToDb();  // <-- This is required to establish the connection

// app.use(cors());
// app.use(express.json())
// app.use(express.urlencoded({extended : true}))

// app.get('/', (req,res) => {
//     res.send("Hello World")
// })

// app.use('/users', userRoutes);


// module.exports = app;






//trial code



const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

const app = express();

// Connect to MongoDB
connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/users', userRoutes);

module.exports = app;
