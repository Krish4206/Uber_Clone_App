// const mongoose = require('mongoose');

// function connectToDb() {
//     mongoose.connect(process.env.DB_CONNECT).then(() => {
//         console.log("✅ Connected to DB successfully!");
//     }).catch(err => {
//         console.error("❌ Error connecting to DB:", err);
//     });
// }

// module.exports = connectToDb;




//trial code


const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("✅ Connected to DB successfully!");
    }).catch(err => {
        console.error("❌ Error connecting to DB:", err);
    });
}

module.exports = connectToDb;
