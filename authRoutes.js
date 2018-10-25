/*created by Pranav Gupta (pg07codes) on 25-10-2018 */


const router=require('express').Router()
let upload  = require('multer')()

router.get('/',(r,s)=>{
    s.sendFile("login.html",{ root: __dirname })
})

router.get('/signup',(r,s)=>{
    s.sendFile('signup.html',{ root: __dirname })
})

router.post('/signup',(r,s)=>{
    s.send("jfkla")
})

module.exports=router