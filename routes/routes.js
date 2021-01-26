const express = require('express')
const users = express.Router()
const cors = require('cors')


users.use(cors())


users.post('/apply', (req, res) => {
  const today = new Date()
  const userData = {
    user_name: req.body.user_name,  
    email: req.body.email,
    mobile:req.body.mobile,
    created: today
  }

  
})

module.exports = users
