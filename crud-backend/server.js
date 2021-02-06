import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './Routers/userRouter.js';

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running at ${port}........`))
app.get("/",(req,res) => res.send("Hurray! server is running..."))


// Step - 2: Now connect with MongoDB

const url = "mongodb+srv://debjit:k9cgewsiZCmYKa8U@cluster0.u7g8u.mongodb.net/userDB?retryWrites=true&w=majority";
mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


// Step - 3: Now create models in Model folder

// Step -4: Now create routes (In routers folder and use here)

app.use("/users", userRouter);