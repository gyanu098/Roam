const {createUser, existingUser} = require("../model/userModel")
const pool = require('../dataBase/db');



const addUser = async(req , res) =>{
    try{
        const{ name,email,password } = req.body;
        if(!name || !email || !password) {
            return res.json({
                message: "field empty", 
            });
        }
        const user = await createUser(name , email , password);
        if (user){
            res.json({
                message : " Created successfully",
                user: user,

            });
        }
    }
     catch(e){
        res.json({
            message :"Sorry unsuccessful",
            e: e.message,
        });
    }
};


const login= async(req , res) =>{
    try{
        const{ email,password } = req.body;
        if(!email || !password) {
            return res.json({
                message: "field empty",
            });
        }

        const user = await existingUser(email);
        if(!user){
            return res.json({
                message: "User not found",
            });
        }

        if (user.password !== password){
            return res.json({
                message: "Incorrect password",
            });
        }

        if (user.password === password){
            return res.json({
                message: "Login successful",
            });
        }

        if (user){
            res.json({
                message : "Login successful",
            });
        }

}

        catch(e){
            res.json({
                message :"Sorry unsuccessful",
                e: e.message,
            });
        }
};

module.exports = {addUser, login};