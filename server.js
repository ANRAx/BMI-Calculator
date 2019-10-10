const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmiCalc.html");
});

app.post("/", function(req, res) {
    var userWeight = Number(req.body.weight);
    var userHeight = Number(req.body.height);
    var bmiResult = (userWeight / Math.pow(userHeight, 2)) * 703;

    res.send("Your BMI is " + bmiResult.toFixed(2));
});

app.listen(3000, function() {
    console.log("Server running on port 3000.");
});