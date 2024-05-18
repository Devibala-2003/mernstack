const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    u_name:{
        type:String,
        required:[true,"Name is required"],
        trim:true
    },
    p_name:{
        type:String,
        required:[true,"product is missing"],
        trim:true
    },
    p_review:{
        type:String,
        required:[true,"Review is missing"],
        trim:true
    },
    emailid:{
        type:String,
        required:[true,"Enter email ID"],
        lowercase:true
    },
    rating:{
        type:Number,
        //min:[50,"Low marks entered"],
        required:[true,"Marks should not be empty"],
    },
    simage:{
        type:String
    }

})
const User=mongoose.model("User",userSchema);
module.exports = User;