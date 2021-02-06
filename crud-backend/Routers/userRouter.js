import express from 'express'
import User from '../Models/Users.js'
const userRouter = express.Router()



userRouter.get(
    '/',
    async(req,res) => {
        const data = new User({
            name: "Debjit",
            dateAdded: "6 Feb, 2021",
            phone: +919330348081
        });


        try {
            await data.save();
        } catch (error) {
            console.log(error)
        }

    }
)



export default userRouter