const express = require('express');
const { createUser } = require('../controller/userController');


const router = express.Router();

console.log('hai')
router.post('/register',createUser);
console.log('hai2')


module.exports = router;