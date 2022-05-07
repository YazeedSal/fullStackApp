import greetRouter from "./greet/greet.api"
import userRouter from "./user/user.api"
import express  from 'express'

const v1Router = express.Router()

v1Router.use('/greet',greetRouter)
v1Router.use('/user',userRouter)

export default v1Router