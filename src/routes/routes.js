/*------------------------------------------Import Modules:-------------------------------------------*/
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

const middleware = require('../middlewares/middlewares')


/*------------------------------------------API's for userController-------------------------------------------*/
router.post('/register',userController.createUser)
router.post('/login', userController.loginUser)



/*------------------------------------------Export Modules:-------------------------------------------*/
module.exports = router