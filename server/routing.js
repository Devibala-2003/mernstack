const User=require("./User")
const multer=require("multer")
let fname=""
function getDemo(req,res){
    res.send("This is from Server")

}
const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null, "images")
    },
    filename:(req,file,cb)=>{
        cb(null,fname)
    }
})

exports.upload=multer({
    storage:storage
})



async function getusers(req,res){
    try {
        const users= await User.find()
        res.status(201).json({
            users
        })
    } catch (error) {
        res.send(error)
    }
    //res.send("This is students page")
}

exports.getlogin=(req,res)=>{
    res.send("This is Login Page")
}
exports.getuser=async (req,res)=>{
    //res.send("This is student detail of: "+ req.params.id)
    try {
        const user = await User.findById(req.params.id);
        res.status(201).json({
            user:user
        })
    } catch (error) {
        res.send(error)
    }
}

exports.createuser=async (req,res)=>{
    try{
       const user = await User.create(req.body)
       fname=req.body.simage;
       console.log(fname); 
       res.status(201).json({
            msg:"Created",
            data:user
        })
    }
    catch (error) {
        res.send(error)

    }
    
    //res.send("New Student is inserted")
}



exports.uploadImg=async (req,res)=>{
    try{
 
       res.status(201).json({
            msg:"uploaded"
        })
    }
    catch (error) {
        res.send(error)
    }
    }
exports.updateuser=async(req,res)=>{
    try{
        const updateuser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.status(201).json({
        updateuser
    })
    }catch(error){
        res.status(400).json({
            status:"Fail",
            msg:error
        })
    }
}




exports.deleteuser=async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status:"Success",
            message:"Deleted"
        })
    }catch(error){
  res.status(400).json({
    status:"Fail",
    msg:error
  })
    }
    
}
exports.getDemo=getDemo;
exports.getusers=getusers;
