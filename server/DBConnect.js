const mongoose = require("mongoose")


function DBConnect(){
    mongoose.connect("mongodb+srv://bala:bala123@cluster0.kmkqu1a.mongodb.net/UserDB?retryWrites=true&w=majority&appName=Cluster0",{

        useNewUrlParser: true

}).then((conn)=>{
    console.log("Connected to DB");}
).catch((err)=>{
    console.log("Some error in DB connection" + err);
});
}

module.exports = DBConnect;


