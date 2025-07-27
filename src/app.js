const express = require("express");

const app = express();

// use of regex
app.get('/a/' , (req, res) => {
    res.send({ firstName: "ABCD" , lastName: "XYZ"})
});
// complex regex
app.get(/.*fly$/,(req, res)=>{
    res.send('Regex testing ')
});

// This will only handle get API call for /user
app.get("/user", (req, res) => {
  res.send({
    firstName: "Suraj",
    lastName: "Nikhade",
  });
});

app.post("/user", (req, res) => {
  res.send("Data send successfully");
});

app.delete("/user", (req, res) => {
  res.send("User data ");
});

// this will match all the http method API call to /test
app.use("/user", (req, res) => {
    res.send("Data send successfully");
  });
  
// order of route matters.
app.use("/test", (req, res) => {
  res.send("test from server");
});

app.listen(3000, () => {
  console.log("run port 3000");
});
