require('dotenv').config(); 
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const express = require("express");
const app = express();
const port = 3000 ;
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.post("/",async function(req,res){
  const question = req.body.question ;
  try {
    const result = await model.generateContent(question);
    const answer = result.response.text();
    return res.json({
      answer
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Error in fetching from GOOGLE!"
    })
  }
});


app.get('/',(req,res)=>{
  return res.status(200).send("Api is running");
})

app.listen(port,()=>{
  console.log(`Server is running on port: ${port}`)
});