import  express  from "express";

const greetRouter = express.Router()


greetRouter.get('/greet', function (req, res) {
    res.send('hello world123')
})
greetRouter.post('/greet', function (req, res) {
    const {body,headers} = req

    console.log(headers.name +' says '+ body.msg);
    res.send('thanks for posting')
})

export default greetRouter