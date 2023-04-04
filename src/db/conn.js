const mongoose =require("mongoose");

mongoose.connect("mongodb+srv://admin:admin123@cluster0.lzapz85.mongodb.net/?retryWrites=true&w=majority" , {
       useNewUrlParser:true,
       useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})
