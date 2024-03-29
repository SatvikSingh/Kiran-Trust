const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const nodemailer = require("../utlis/nodemailer");
const cloudinary = require("cloudinary");
const Doctor = require("../models/doctor");

exports.signup = async (req, res) => {
  try {
    if (req.body.password === req.body.cpassword) {
      const { name, email, password } = req.body;
      let user = await User.create({
        name,
        email,
        password,
      });
      if (user) {
        var token = jwt.sign({ id: user._id }, process.env.Secret_key);
        res.cookie("token", token, {
          httpOnly: true,
          expiresIn: 7 * 24 * 60 * 60 * 1000, // 7 DAYS
        });
        res.status(200).json({
          success: true,
          user,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Bad Request",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "Password doesnt match",
      });
    }
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};
exports.logout = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  return res.status(200).json({
    success: true,
    message: "Succesfully Logged Out",
  });
};

exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "Invalid Username/Password",
      });
    } else {
      if (await bcryptjs.compare(req.body.password, user.password)) {
        var token = jwt.sign({ id: user._id }, process.env.Secret_key);
        res.cookie("token", token, {
          httpOnly: true,
          expiresIn: 7 * 24 * 60 * 60 * 1000, // 7 DAYS
        });
        // res.send("Cookie set successfully");
        // console.log(token);
        // console.log(req.cookies);
        // console.log(res.cookie());
        res.status(200).json({
          success: true,
          user,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Invalid Username/Password",
        });
      }
    }
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

exports.forgotpass = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Account Doesnt Exist",
      });
    } else {
      var token = jwt.sign({ id: "aufyv" }, process.env.Secret_key);
      user.resetpass = token;
      user.resetpasstime = Date.now() + 15 * 60 * 1000;
      await user.save();
      // need to change url while connecting it with frontend
      const resetPasswordUrl = `http://localhost:3601/user/changepass/${token}`;
      const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
      await nodemailer.main({
        email: req.body.email,
        subject: "Email for resetting Password",
        message: message,
      });
      return res.status(200).json({
        success: true,
        message: "Req done",
      });
    }
  } catch (e) {
    return res.status(401).json({
      success: false,
      message: e.message,
    });
  }
};

exports.changepass = async (req, res) => {
  let user = await User.findOne({ resetpass: req.params.token });
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Token Either Expired or wrong ",
    });
  } else {
    if (user.resetpasstime > Date.now()) {
      if (req.body.password === req.body.cpassword) {
        user.resetpass = undefined;
        user.resetpasstime = undefined;
        user.password = req.body.password;
        await user.save();
        var token = jwt.sign({ id: user._id }, process.env.Secret_key);
        res.cookie("token", token, {
          httpOnly: true,
          expiresIn: 7 * 24 * 60 * 60 * 1000, // 7 DAYS
        });
        return res.status(200).json({
          success: true,
          message: "Password Updates Successfully",
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Password does'nt match ",
        });
      }
    } else {
      user.resetpass = undefined;
      user.resetpasstime = undefined;
      await user.save();
      return res.status(401).json({
        success: false,
        message: "Token Either Expired or wrong ",
      });
    }
  }
};

// Get User Details
exports.getuserdetail = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.User,
    });
  } catch (e) {
    return res.status(401).json({
      success: false,
      message: e.message,
    });
  }
};

// Update Password or other details from user side
exports.updateuser = async (req, res) => {
  try {
    let user = await User.findById(req.User.id);
    // all other field will be autofilled handlled from frontend
    user.name = req.body.name;
    user.email = req.body.email;
    // if(req.body.avatar!=""){
    //     const imageId = user.images.public_id;
    //     await cloudinary.v2.uploader.destroy(imageId);
    //     const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //         folder: "avatars",
    //         width: 150,
    //         crop: "scale",
    //     });
    //     user.images={
    //         public_id: myCloud.public_id,
    //         public_url: myCloud.secure_url,
    //     }
    // }
    await user.save();
    res.status(200).json({
      success: true,
    });
  } catch (e) {
    return res.status(401).json({
      success: false,
      message: e.message,
    });
  }
};

exports.updatepass = async (req, res) => {
  try {
    if (await bcryptjs.compare(req.body.oldpassword, req.User.password)) {
      if (req.body.password === req.body.cpassword) {
        req.User.password = req.body.password;
        await req.User.save();
        res.status(200).json({
          success: true,
          message: "Password Updated Successfully",
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Password doesnt match",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "OldPassword iswrong",
      });
    }
  } catch (e) {
    res.status(401).json({
      success: false,
      message: e.message,
    });
  }
};

exports.createreviews = async (req, res) => {
  try {
    let doctorid = req.query.doctorid;
    // console.log(req.query);
    let userid = req.User.id;
    let doctor = await Doctor.findById(doctorid);
    if (!doctor) {
      res.status(401).json(`Doctor Does Not Exists!!`);
      return;
    }
    let isreviewed = false;
    doctor.reviews.forEach((element) => {
      if (element.user.toString() === userid.toString()) {
        (element.rating = req.body.rating),
          (element.comment = req.body.comment);
        isreviewed = true;
        return;
      }
    });
    if (isreviewed === true) {
      let avg = 0;
      doctor.reviews.forEach((element) => {
        avg += element.rating;
      });
      avg = avg / doctor.noofreviews;
      doctor.ratings = avg;
      await doctor.save();
    } else {
      let review = {
        user: userid,
        name: req.User.name,
        rating: req.body.rating,
        comment: req.body.comment,
      };
      doctor.reviews.push(review);
      let avg = 0;
      doctor.reviews.forEach((element) => {
        avg += element.rating;
      });
      doctor.noofreviews = Number(doctor.noofreviews) + 1;
      avg = avg / doctor.noofreviews;
      doctor.ratings = avg;
      await doctor.save();
    }
    res.status(200).json({
      success: true,
    });
  } catch (e) {
    res.status(401).json({
      success: false,
      message: e.message,
    });
  }
};
exports.getslot = async (req, res) => {
  try {
    let doctorid = req.params.doctorid;
    let Slots = await Doctor.findById(doctorid);
    if (!Slots) {
      res.status(401).json({
        success: false,
        message: "Doctor Not Found",
      });
      return;
    }
    let curr_date = new Date();
    let last_date = Slots.lastReset;

    if (last_date === null || last_date === undefined) {
      Slots.lastReset = curr_date;
      await Slots.save();
    } else {
      let time_diff = (curr_date.getTime() - last_date.getTime()) / 86400000;

      if (time_diff >= 1) {
        Slots.slots.forEach((element) => {
          element.booked = false;
          return;
        });
        Slots.lastReset = curr_date;
        await Slots.save();
      }
    }

    res.status(200).json({
      success: true,
      available_slots: Slots.slots,
    });
  } catch (e) {
    res.status(401).json({
      success: false,
      message: e.message,
    });
  }
};

exports.getalldoctor = async (req, res) => {
  try {
    let doctor = await Doctor.find();
    res.status(200).json({
      success: true,
      doctors: doctor,
    });
  } catch (e) {
    res.status(401).json({
      success: false,
      message: e.message,
    });
  }
};

exports.bookslot = async (req, res) => {
  try {
    let doctorid = req.params.doctorid;
    let slotid = req.params.slotid;
    let doctor = await Doctor.findById(doctorid);
    if (!doctor) {
      res.status(401).json({
        success: false,
        message: "Doctor Not Found",
      });
      return;
    }
    let slotbooked = false;
    doctor.slots.forEach((element) => {
      if (
        element._id.toString() === slotid.toString() &&
        element.booked == false
      ) {
        slotbooked = true;
        element.booked = true;
        element.user = req.User.id;
        return;
      }
    });
    if (slotbooked == false) {
      res.status(401).json({
        success: false,
        message: "Slot Not Found / It is Already Booked",
      });
    } else {
      await doctor.save();
      // custom message for patient and doctor --- todo
      const message = `Your Meeting is Successfully Scheduled. \n\n`;
      await nodemailer.main({
        email: req.User.email,
        subject: "Email for Meeting Details",
        message: message,
      });
      await nodemailer.main({
        email: doctor.email,
        subject: "Email for Meeting Details",
        message: message,
      });
      return res.status(200).json({
        success: true,
        message: "Slot Booked Successfully",
      });
    }
  } catch (e) {
    res.status(401).json({
      success: false,
      message: e.message,
    });
  }
};
