const {Router} = require('express')
const {validator} = require('valdocs')

const {sigInValidator, signUpValidator} = require('../validators/authValidators')
const {signIn, signUp} = require('../controllers/auth')

const router = Router()

router.route('/')
.get(validator(),(req, res, next)=>{res.send('hello world')})

router.route('/login')
.post(validator(sigInValidator), signIn)

router.route('/signup')
.post(validator(signUpValidator), signUp)


module.exports = router

 