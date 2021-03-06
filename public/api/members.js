const express = require('express')
const router = express.Router()
const members = require('../../members')
const uuid = require('uuid')




//get all members
router.get('/', (req, res) => {

    res.json(members)})

// get single member 
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === req.params.id)
    if(found){
        res.json(members.filter(member => member.id === req.params.id))
    }else{
        res.status(400).json({msg:'no id found' })
    }

})

// create member
router.post('/', (req, res) => {
    newMember = {
        id: uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        status:'active'
    }

    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg:'please include name and email'})
    }

    members.push(newMember)
     
    res.json(members)

})

// update member 
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === req.params.id)
    if(found){
       const updatedMember = req.body
       members.forEach(member => {
           if(member.id === req.params.id){
               member.name = updatedMember.name ? updatedMember.name : member.name
               member.email = updatedMember.email ? updatedMember.email : member.email

               res.json({msg : 'member updated', member})
           }
       })

    }else{
        res.status(400).json({msg:'no id found' })
    }
})


    // delete member 
router.delete('/:id', (req, res) => {
const found = members.some(member => member.id === req.params.id)
if(found){
    res.json({msg:'member deleted' , members: members.filter(member => member.id !== req.params.id)})
}else{
     res.status(400).json({msg:'no id found' })
    }

    
})

    



module.exports = router