import express from "express";
const app = express();
const port = 8000;

function middleWare(req, res, next) {
  console.log("middleWare");
  next();
}

app.use(middleWare);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
