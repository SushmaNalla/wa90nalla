var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randomNumber=Math.floor(Math.random()*100)+1
    let data=req.query.x
    console.log(data)
    res.render('compute',{
        randSolution:`atan2 applied to ${randomNumber} is ${Math.atan2(randomNumber)}`,
        querySolution:` atan2 applied to ${data} is ${Math.atan2(data)}`
    })
})

module.exports=router