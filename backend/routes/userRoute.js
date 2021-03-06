import express from 'express';
import User from '../models/userModel'

const router = express.Router();

router.get('/createadmin', async(req, res) => {
    try {
        const user = new User({
            name: 'Robert',
            email: 'robert_amarandei@yahoo.com',
            password: '1234',
            isAdmin: true
        })
    
        const newUser = await user.save();
        res.send(user);
    } catch (error) {
        res.send({msg: error.message});
    }
})

export default router;