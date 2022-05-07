import  express  from "express";

const userRouter = express.Router()


userRouter.get('/greet', function (req, res) {
    res.send('hello world123')
})
userRouter.post('/greet', function (req, res) {
    const {body,headers} = req

    console.log(headers.name +' says '+ body.msg);
    res.send('thanks for posting')
})

export default userRouter