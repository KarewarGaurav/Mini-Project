import express from 'express'
import bcryt from 'bcrypt'
const router = express.Router();
import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'


router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        return res.json({ message: "user already existed" })
    }

    const hashpassword = await bcryt.hash(password, 10)
    const newUser = new User({
        username,
        email,
        password: hashpassword,
    })

    await newUser.save()
    return res.json({ status: true, message: "record registed" })
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
        return res.json({ message: 'user is not registered' })
    }

    const validPassword = await bcryt.compare(password, user.password)
    if (!validPassword) {
        return res.json({ message: "Password is incorrect" })
    }

    const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1h' })
    res.cookie('token', token, { httpOnly: true, maxAge: 360000 })
    return res.json({ message: "Login Successfully" })

})

router.post('/forgotpassword', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ message: "user not regidtered" })
        }

    } catch (err) {
        console.log(err)
    }
})


const verifyUser = async (req, res, next) => {
    try {
        
        const token = req.cookies.token;
        if (!token) {
            return res.json({ status: false, message: "no token" })
        }
        const decoded = await jwt.verify(token,process.env.KEY);
        next()
    } catch (err) {
        return res.json(err);
    }
}

router.get('/verify',verifyUser, (req, res) => {
    return res.json({status:true,message:"authorized"})

});

router.get('/logout',(req,res)=>{
    res.clearCookie('token')
    return res.json({status : true})
})


export { router as UserRouter }