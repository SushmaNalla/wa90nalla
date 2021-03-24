var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randomNumber=Math.floor(Math.random()*100)+1
    let data=req.query.x
    console.log(data)
    res.render('compute',{
        randSolution:`cbrt applied to ${randomNumber} is ${Math.cbrt(randomNumber)}`,
        querySolution:` cbrt applied to ${data} is ${Math.cbrt(data)}`
    })
})

module.exports=router