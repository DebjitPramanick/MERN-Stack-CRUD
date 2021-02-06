import express from 'express'
import User from '../Models/Users.js'
const userRouter = express.Router()



userRouter.post(
    '/add',
    async(req,res) => {
        const data = {
            name: req.body.name,
            dateAdded: req.body.dateAdded,
            desc: req.body.desc,
            phone: req.body.phone
        }

        const user = new User(data);

        try {
            await user.save();
        } catch (error) {
            console.log(error)
        }

    }
)


userRouter.get(
    '/get',
    async (req, res) => {
        User.find({}, (error,result)=>{
            if(error) res.send(error)
            else res.send(result)
        })

    }
)


export default userRouter