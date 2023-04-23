const express=require('express');
const app=express();
app.use(express.json())
const port=process.env.PORT || 5000;
const mongoDB=require("./db.js")
mongoDB();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
app.get('/',(req,res)=>
{ 
      res.send("Hello World ---")

})

app.use('/api',require('./Routes/CreateUser.js'))
app.use('/api',require('./Routes/DisplayData.js'))
app.use('/api',require('./Routes/OrderData'))

app.listen(port,()=>
{
    console.log(`Example app listening on port ${port}`);
})