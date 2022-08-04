var Router = require('router');
var router = Router();
var middleware=require('../middleware/checkauth');


router.use('/user',require('./userroute'))

router.use('/doctor',require('./doctorroute'))

router.use('/admin',require('./adminroute'))


module.exports=router;