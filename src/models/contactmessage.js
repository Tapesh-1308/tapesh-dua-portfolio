const mongoose = require("mongoose");
const validator = require("validator");

//schema
const portfolioSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        minLength: 3
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    subject:{
        type:String,
        required:true,
        minLength: 10
    },
    message:{
        type:String,
        required:true
    },
    dat:{
        type: Date,
        default: Date.now
    }

});


// collection

const UserMsg = mongoose.model("UserMsg", portfolioSchema);

//exporting
module.exports = UserMsg;