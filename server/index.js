const express = require('express');
const jwt = require('jsonwebtoken')

const app = express();


app.get('/test', (req, res) => {
    res.json({
        message: 'test message'
    })
})

app.post('/login', (req, res) => {
    const admin = {
        'id' : 1,
        username : 'admin',
        password : '123456'
    }

    jwt.sign({admin}, 'secretKey', (err, token) => {
        res.json({
            token
        })
    })
})
app.listen(8000, () => console.log('Server started on port 8000'))