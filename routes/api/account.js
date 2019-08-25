var express = require('express');
var router = express.Router();



const user=require('../../controller/user');


// for register
router.post('/register',user.register);



module.exports = router;
