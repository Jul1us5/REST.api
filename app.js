require('dotenv').config()

const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: 'This is working!'
    })
})

app.listen(process.env.APP_PORT, () => {
    console.log('Server is runing on : ', process.env.APP_PORT);
})