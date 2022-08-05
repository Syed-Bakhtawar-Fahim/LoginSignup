const jwt = require("jsonwebtoken")
const User = require('../models/User')
const ErrorResponse = require("../utils/errorResponse")

exports.protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){

        /*
            We use [1] because we want to access value of index 1 which is token
            Bearer sdfjf3432nnnjnasdao
            
            Bearer is [0]
            sdfjf3432nnnjnasdao [1]
        */
        token = req.headers.authorization.split(" ")[1]

    }

    if(!token){
        return next(new ErrorResponse("Not authorized to access this route", 401))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)

        /*
        This decoded.id is come from User.js file in Model folder in getSignedToken() function
         id: this._id }
        */

        if(!user){
            return next(new ErrorResponse("No user found with this id", 404))
        }

        req.body = user
        next()
    
    } 
    catch (error) {
        return next(new ErrorResponse("Not Authorized to access this route", 401))
    }

}