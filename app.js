const express= require('express');
const app = express()

app.use(express.json())


app.get('',(req,res)=>{


})


const port = 6000;
app.listen(port,console.log(`your app is listening at port ${port}.....`))
require('./connection/db.con')