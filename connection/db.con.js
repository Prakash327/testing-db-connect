const mongoose = require('mongoose')
const connectionString='mongodb+srv://Prakash:12345@nodeexpressproject.dwcx3pp.mongodb.net/testiong?retryWrites=true&w=majority'


mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(()=>console.log("Connected to DB successfully "))
.catch((error)=>console.log(error))