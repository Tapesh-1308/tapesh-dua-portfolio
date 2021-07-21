const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/portfolioTapesh", {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})