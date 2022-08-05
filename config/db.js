const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://userAuth:userAuth@cluster0.u62ub.mongodb.net/users?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
        })
        .then(() => {
            console.log("database connected")
        })
        .catch((e) => {
            console.log("Something went wrong due to this error", e);
        })
}

module.exports = connectDB