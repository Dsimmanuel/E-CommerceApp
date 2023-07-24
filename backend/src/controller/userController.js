const User = require('../models/userModel');

const createUser = async (req,res) => {
    console.log(req.body)
    const findUser = await User.findOne({email: req.body.email});

    if (!findUser) {//Create new user
        const newUser = User.create(req.body);
        res.json({
            msg: "User created successfully",newUser,
            success: true,
        })
    }else{
        res.json({
            msg: "User already exists",
            success: false,
        });
    }
    
}

module.exports = { createUser };
