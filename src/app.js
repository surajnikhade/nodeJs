const express = require("express");

const app = express();
// order of route matters.
app.use("/test", (req, res) => {
  res.send("test from server");
});

app.use("/test/2", (req, res) => {
  res.send("test/2 from server");
});

app.use("/", (req, res) => {
  res.send("/ called ");
}); 

app.use("/hello", (req, res) => {
  res.send("response for hello");
});

app.use("/red", (req, res) => {
  res.send("red is the response");
});

app.listen(3000, () => {
  console.log("run port 3000");
});
