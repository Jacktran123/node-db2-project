
const server=require('./server.js');
const Port= 7000;



server.listen(Port,()=>{
    console.log(`Server is listening on Port: ${Port}`)
});


