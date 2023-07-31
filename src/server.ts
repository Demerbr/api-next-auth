import 'express-async-errors'
import  Express, { NextFunction, Request, Response }  from "express";
import router from "./routes/router";


const app = Express()
const PORT = 8000
app.use(Express.json())




app.use(router)


app.use((error:Error , request:Request, response:Response, next:NextFunction ) =>{
  return response.json({
    status: "Error",
    message: error.message
  })
  next()

})

app.listen(PORT, ()=>{
  console.log(`Server is running on port  ${PORT}`)
})


