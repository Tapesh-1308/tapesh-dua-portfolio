//required module
const express = require('express');
const path = require("path");
require("./db/conn");
const UserMsg = require("./models/contactmessage")

const app = express();
const port = process.env.port || 8000;

//Setting path
const static_path = path.join(__dirname, "../public");

//middleware
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));

app.post("/contact", async(req, res) => {
    try {
        const userData = new UserMsg(req.body)
        await userData.save();
        res.status(201).send("Thanks for contacting");
    } catch (error) {
        res.status(500).send(error);
    }
})

//listening port
app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
});