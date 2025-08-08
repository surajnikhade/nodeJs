const express = require("express");

const app = express();
const { authenticate } = require("./middleware/auth/auth");

app.use('/', authenticate);

app.get('/admin/getDetails', (req, res) => {
  res.send("Admin details");
})


app.listen(3000, () => {
  console.log("run port 3000");
});