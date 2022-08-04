var Router = require('router');
var router = Router();
var middleware=require('../middleware/checkauth');
var doctorcontroller=require('../controller/doctorcontroller');

router.post('/signup',doctorcontroller.signup);
router.get('/logout',doctorcontroller.logout);
router.post('/login',doctorcontroller.login)
router.post('/forgot',doctorcontroller.forgotpass);
router.post('/changepass/:token',doctorcontroller.changepass);
// router.put('/updateuser',middleware.islogin,usercontroller.updateuser);
router.get('/userdetail',middleware.isdoctorlogin,doctorcontroller.getuserdetail);
router.post('/updatepass',middleware.isdoctorlogin,doctorcontroller.updatepass);
// router.post('/create-reviews/',middleware.islogin,usercontroller.createreviews);


module.exports=router;