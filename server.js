const express=require('express');
const db=require('./dbKnex');

const server= express();
server.use(express.json());

server.get('/', async (req,res)=>{
    try{
        const cars= await db('cars');
        res.status(200).json(cars);
    } catch(error){
        if(error){
            req.status(500).json({messageError: 'Internal Server Error'})
        }
        
    }
});



server.post('/', async (req,res)=>{
    try{
        const newCar=req.body;
       const id= await db('cars').insert(req.body);
       res.status(201).json(`Here is your new car id:${id}`);
        } catch(error) {
        if(error){
            res.status(500).json({messageError:'Internal Server Error'})
        }
        
    }
})

server.put('/:id', (req,res)=>{
    db('cars').where({id : req.params.id}).update(req.body)
    .then(success=> res.status(200).json(`Successfully update the car info`))
    .catch(err=>res.status(500).json({error: 'Error in updating the user'}))
})

server.delete('/:id', (req,res)=>{
    db('cars').where({id : req.params.id}).delete()
    .then(success=> res.status(200).json(`Successfully delete the car`))
    .catch(err=>res.status(500).json({error: 'Error in updating the user'}))
})

module.exports=server;