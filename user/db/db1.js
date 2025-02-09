
const mongoose = require('mongoose')

function connect(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('User service connected to MongoDB');
    }).catch(error =>{
        console.log(error);
    });
}

module.exports= connect;