const mongoose = require("mongoose")
const uri = "mongodb://localhost:27017/adminPanel"

 const connectDb = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    },()=>console.log("Mongo db connected"))
  } catch (error) {
    console.log(error.message)
  }
}

module.exports= {connectDb}