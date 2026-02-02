const express = require("express")
const Requirement = require("../models/Requirement")
const router = express.Router();

router.post('/', async (req,res)=>{
 try{
const requirement = new Requirement(req.body);
await requirement.save();
res.status(201).json({success:true, requirement});
 }catch(err){
    res.status(500).json({error:err.message})
 }
})

module.exports = router;