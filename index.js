import express from 'express'
import mongoose from 'mongoose'
import router from './src/api'

const app = express()

app.use(express.json())// this parces the json string that comes from the body

app.use('/api',router)


app.listen(8080, function () {
    console.log('up and running on port 8080');
})