
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserController = require('./controller/UserController')
require('dotenv').config()

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true }).catch(error => {
  console.log("CONNECTION TO MONGO ERROR", error)
})
app.use(express.json())
app.use(express.urlencoded())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/user/register-new', (req, res) => {
  var bodyPassword = req.body.password
  var bodyEmail = req.body.email
  var bodyName = req.body.name
  var bodyRole = req.body.role
  console.log('SALTROUNDS', process.env.SALTROUNDS)
  hashPassword(bodyPassword, (hash) => {
    UserController.createNew(bodyEmail, hash, bodyName, bodyRole)
    res.send({body: "SUCCESS"})
  })
  // UserController.createNew("TEST1","TEST1","TEST1","TEST1")
})

app.post('/user/login',(req,res) => {
  var bodyEmail = req.body.email
  var bodyPassword = req.body.password
  UserController.findByEmail(bodyEmail, async user => {
    const match = await bcrypt.compare(bodyPassword, user.password)
    console.log('LOGIN', match)
    console.log('LOGIN', user)
    console.log('LOGIN', bodyPassword)
    if(match){
      res.send("SUCCESS")
    } else {
      res.send("FAIL")
    }
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


const hashPassword = (password, callback) => {
  console.log('HASH PASSWORD', password)
  bcrypt.genSalt(parseInt(process.env.SALTROUNDS), (err, salt) => {
    if(!err){
      console.log('SALT ', salt)
      bcrypt.hash(password, salt, (err, hash) => {
        if (!err){
          console.log('HASH' ,hash)
          callback(hash)
        } else {
          console.log(`ERROR HASHING PASSWORD`, err)
        }
      })
    } else {
      console.log(`Error gen salt ${err}`)
    }
  })
}
