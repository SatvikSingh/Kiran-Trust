const Doctor=require('../models/doctor');
const User=require('../models/user');

const jwt=require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const nodemailer=require('../utlis/nodemailer');
const cloudinary = require("cloudinary");

exports.signup=async (req,res)=>{
    try{
        // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        //     folder: "avatars",
        //     width: 150,
        //     crop: "scale",
        // });
        if(req.body.password===req.body.cpassword){
            const { name, email, password ,price,desc} = req.body;
            let doctor = await Doctor.create({
                name,
                email,
                password,
                images: {
                    public_id: req.body.images.public_id,
                    public_url: req.body.images.public_url,
                },
                price,
                desc
                // images: {
                //     public_id: myCloud.public_id,
                //     public_url: myCloud.secure_url,
                // },
            });
            if(doctor){
                var token = jwt.sign({id:doctor._id}, process.env.Secret_key);
                res.cookie('token', token, { 
                    httpOnly: true,
                    expiresIn: 7*24*60*60*1000 // 7 DAYS
                });
                res.status(200).json({
                    success: true,
                    doctor
                });
            }else{
                res.status(400).json({
                    success:false,
                    message:"Bad Request"
                });
            }
        }else{
            res.status(400).json({
                success:false,
                message:"Password doesnt match"
            });
        }
    }
    catch(e){
        res.status(400).json({
            success:false,
            message:e.message
        });
    }
}
exports.logout=async (req,res)=>{
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    return res.status(200).json({
        success:true,
        message:"Succesfully Logged Out"
    });
}



exports.login=async (req,res)=>{
    try{
        let doctor=await Doctor.findOne({email:req.body.email});
        if(!doctor){
            res.status(400).json({
                success:false,
                message:"Invalid Username/Password"
            });
        }else{
            if(await bcryptjs.compare(req.body.password,doctor.password)){
                var token = jwt.sign({id:doctor._id}, process.env.Secret_key);
                res.cookie('token', token, { 
                    httpOnly: true,
                    expiresIn: 7*24*60*60*1000 // 7 DAYS
                });
                res.status(200).json({
                    success: true,
                    doctor
                });
            }else{
                res.status(400).json({
                    success:false,
                    message:"Invalid Username/Password"
                });
            }
        }
    }catch(e){
        res.status(400).json({
            success:false,
            message:e.message
        });
    }
}

exports.forgotpass=async (req,res)=>{
    try{
        let doctor=await Doctor.findOne({email:req.body.email});
        if(!doctor){
            return res.status(401).json({
                success:false,
                message:"Account Doesnt Exist"
            });
        }else{
            var token = jwt.sign({id:"aufyv"}, process.env.Secret_key);
            doctor.resetpass=token;
            doctor.resetpasstime=Date.now()+15 * 60 * 1000;
            await doctor.save();
            // need to change url while connecting it with frontend
            const resetPasswordUrl =`http://localhost:3601/doctor/changepass/${token}`
            const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
            await nodemailer.main({
                email:req.body.email,
                subject:"Email for resetting Password",
                message:message
            })
            return res.status(200).json({
                success:true,
                message:"Req done"
            });
        }
    }catch(e){
        return res.status(401).json({
            success:false,
            message:e.message
        });
    }
}


exports.changepass=async (req,res)=>{
    let doctor=await Doctor.findOne({resetpass:req.params.token});
    if(!doctor){
        return res.status(401).json({
            success:false,
            message:"Token Either Expired or wrong "
        });
    }else{
        if(doctor.resetpasstime>Date.now()){
            if(req.body.password===req.body.cpassword){
                doctor.resetpass=undefined;
                doctor.resetpasstime=undefined;
                doctor.password=req.body.password;
                await doctor.save();
                var token = jwt.sign({id:doctor._id}, process.env.Secret_key);
                res.cookie('token', token, { 
                    httpOnly: true,
                    expiresIn: 7*24*60*60*1000 // 7 DAYS
                });
                return res.status(200).json({
                    success:true,
                    message:"Password Updates Successfully"
                });
            }else{
                return res.status(401).json({
                    success:false,
                    message:"Password does'nt match "
                });
            }
        }else{
            doctor.resetpass=undefined;
            doctor.resetpasstime=undefined;
            await doctor.save();
            return res.status(401).json({
                success:false,
                message:"Token Either Expired or wrong "
            });
        }
    }
}

// Get User Details
exports.getuserdetail=async (req,res)=>{
    try{
        res.status(200).json({
            success: true,
            doctor:req.Doctor
        });
    }catch(e){
        return res.status(401).json({
            success:false,
            message:e.message
        });
    }
}

// Update Password or other details from user side
exports.updateuser=async (req,res)=>{
    try{
        let doctor=await Doctor.findById(req.Doctor.id);
        // all other field will be autofilled handlled from frontend 
        doctor.name=req.body.name;
        doctor.email=req.body.email;
        // if(req.body.avatar!=""){
        //     const imageId = doctor.images.public_id;
        //     await cloudinary.v2.uploader.destroy(imageId);
        //     const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        //         folder: "avatars",
        //         width: 150,
        //         crop: "scale",
        //     });
        //     doctor.images={
        //         public_id: myCloud.public_id,
        //         public_url: myCloud.secure_url,
        //     }
        // }
        await doctor.save();
        res.status(200).json({
            success: true,
        });
    }catch(e){
        return res.status(401).json({
            success:false,
            message:e.message
        });
    }
}

exports.updatepass=async (req,res)=>{
    try{
        if(await bcryptjs.compare(req.body.oldpassword,req.Doctor.password)){
            if(req.body.password===req.body.cpassword){
                req.Doctor.password=req.body.password;
                await req.Doctor.save();
                res.status(200).json({
                    success:true,
                    message:"Password Updated Successfully"
                });
            }else{
                res.status(400).json({
                    success:false,
                    message:"Password doesnt match"
                });
            }
        }else{
            res.status(400).json({
                success:false,
                message:"OldPassword iswrong"
            });
        }
    }catch(e){
        res.status(401).json({
            success:false,
            message:e.message
        });
    }
}


exports.addslot=async (req,res)=>{
    try{
        let doctor=await Doctor.findById(req.Doctor.id);
        let starttime=req.body.from;
        let endtime=req.body.to;
        let starth=starttime.substr(0,2);
        let startmin=starttime.substr(3,2);
        let endh=endtime.substr(0,2);
        let endmin=endtime.substr(3,2);
        if(endh<starth){
            res.status(401).json({
                success:false,
                message:"Time Format is wrong"
            });
            return;
        }else if(endh==starth && endmin<startmin){
            res.status(401).json({
                success:false,
                message:"Time Format is wrong"
            });
            return;
        }
        let isoverlapping=false;
        doctor.slots.forEach(element => {
            let tempstarttime=element.from;
            let tempendtime=element.to;
            let tempstarth=tempstarttime.substr(0,2);
            let tempstartmin=tempstarttime.substr(3,2);
            let tempendh=tempendtime.substr(0,2);
            let tempendmin=tempendtime.substr(3,2);
            if(endh<tempstarth || starth>tempendh){
                return;
            }else if(endh==tempstarth && endmin<tempstartmin){
                return;
            }else if(starth==tempendh && startmin>tempendmin){
                return;
            }
            isoverlapping=true;
        });
        if(isoverlapping===true){
            res.status(401).json({
                success:false,
                message:"Slot Already Exists"
            });
            return;
        }
        let slot={
            booked:req.body.booked,
            from:req.body.from,
            to:req.body.to
        }
        doctor.slots.push(slot);
        await doctor.save();
        res.status(200).json({
            success:true,
            message:"Slot Created Successfully"
        });
    }catch(e){
        res.status(401).json({
            success:false,
            message:e.message
        });
    }
}
exports.delslot=async (req,res)=>{
    try{
        let doctor=await Doctor.findById(req.Doctor.id);
        let slotid=req.query.slotid;
        const newslotarray = doctor.slots.filter(
            (slot) => slot.id.toString() !== slotid.toString()
        );
        doctor.slots=newslotarray;
        await doctor.save();
        res.status(200).json({
            success:true,
            message:"Slot Deleted Successfully"
        });
    }catch(e){
        res.status(401).json({
            success:false,
            message:e.message
        });
    }
}
