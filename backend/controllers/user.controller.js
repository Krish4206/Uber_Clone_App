// const userModel = require('../models/user.model')
// const userService = require('../services/user.service')
// const {validationResult} = require('express-validator')

// module.exports.registerUser = async(req,res,next) => {
// console.log("Request Body:", req.body); // Debugging
// const errors = validationResult(req);
// if(!errors.isEmpty()){
//     return res.status(400).json({ errors: errors.array() })
// }

// const {fullname, email, password} = req.body;
// const hashPassword = await userModel.hashPassword(password)
// const user = await userService.createUser({
//     firstname: fullname.firstname,
//             lastname: fullname.lastname,
//             email,
//             password: hashPassword,
// });

// const token = user.generateAuthToken();

// res.status(201).json({token, user})
// }




//trial code



const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    try {
        console.log("📩 Request Body:", req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash Password
        const hashPassword = await userModel.hashPassword(password);

        // Create User
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashPassword,
        });

        // Generate JWT Token
        const token = user.generateAuthToken();

        res.status(201).json({ token, user });
    } catch (error) {
        console.error("❌ Error in registerUser:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
