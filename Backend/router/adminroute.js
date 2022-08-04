var Router = require('router');
var router = Router();
var middleware=require('../middleware/checkauth');
var admincontroller=require('../controller/admincontroller');

// For User

router.get('/getalluser',middleware.isadmin,admincontroller.getalluser);
router.get('/getuser/:id',middleware.isadmin,admincontroller.getoneuser);
router.put('/getuser/:id',middleware.isadmin,admincontroller.updaterole);
router.delete('/getuser/:id',middleware.isadmin,admincontroller.deleteuser);

// For Doctor

router.get('/getalldoctor',middleware.isadmin,admincontroller.getalldoctor);
router.get('/getdoctor/:id',middleware.isadmin,admincontroller.getonedoctor);
router.delete('/getdoctor/:id',middleware.isadmin,admincontroller.deletedoctor);


module.exports=router;