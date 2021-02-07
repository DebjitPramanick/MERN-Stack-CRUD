import express from 'express'
import User from '../Models/Users.js'
const userRouter = express.Router()


userRouter.post(
    '/create',
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


userRouter.put(
    '/update',
    async (req, res) => {
        const data = {
            name: req.body.name,
            dateAdded: req.body.dateAdded,
            desc: req.body.desc,
            phone: req.body.phone,
        }

        const id = req.body._id;

        try {
            await User.findByIdAndUpdate(id,data,(err,updatedData)=>{
                if(!err) res.send(`Updated data`)
                else console.log(err)
            })
        } catch (error) {
            console.log(error)
        }

    }
)


userRouter.delete(
    '/delete/:id',
    async(req,res) => {
        const id = req.params.id;
        await User.findByIdAndRemove(id).exec();
        res.send('Deleted');
    }
)


userRouter.get(
    '/read',
    async (req, res) => {
        User.find({}, (error,result)=>{
            if(error) res.send(error)
            else res.send(result)
        })
    }
)


export default userRouter