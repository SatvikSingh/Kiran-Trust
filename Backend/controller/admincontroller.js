const User=require('../models/user');
const Doctor=require('../models/doctor');


exports.getalluser=async (req,res)=>{
    try{
        let user=await User.find();
        res.status(200).json({
            success:true,
            users:user
        });
    }catch(e){
        res.status(401).json({
            success:false,
            message:e.message
        });
    }
}

exports.getoneuser=async (req,res)=>{
    try{
        let user=await User.findById(req.params.id);
        res.status(200).json({
            success:true,
            user:user
        });
    }catch(e){
       res.status(401).json({
            success:false,
            message:e.message
        });    
    }
}


exports.updaterole=async (req,res)=>{
    try{
        let user=await User.findById(req.params.id);
        user.role=req.body.role;
        await user.save();
        res.status(200).json({
            success:true,
        });
    }catch(e){
       res.status(401).json({
            success:false,
            message:e.message
        });    
    }
}

exports.deleteuser=async (req,res)=>{
    try{
        let user=await User.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success:true,
        });
    }catch(e){
       res.status(401).json({
            success:false,
            message:e.message
        });    
    }
}


exports.getalldoctor=async (req,res)=>{
    try{
        let doctor=await Doctor.find();
        res.status(200).json({
            success:true,
            doctors:doctor
        });
    }catch(e){
        res.status(401).json({
            success:false,
            message:e.message
        });
    }
}

exports.getonedoctor=async (req,res)=>{
    try{
        let doctor=await Doctor.findById(req.params.id);
        res.status(200).json({
            success:true,
            doctor:doctor
        });
    }catch(e){
       res.status(401).json({
            success:false,
            message:e.message
        });    
    }
}




exports.deletedoctor=async (req,res)=>{
    try{
        let doctor=await Doctor.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success:true,
        });
    }catch(e){
       res.status(401).json({
            success:false,
            message:e.message
        });    
    }
}

