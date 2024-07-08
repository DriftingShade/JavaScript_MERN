import express from "express";
const app = express();
const port = 8000;

app.use(express.json());

let toys = [
  { toyName: "Barbie", toyMaker: "Mattel", cost: 20, id: 34287 },
  { toyName: "Legos", toyMaker: "LEGO", cost: 30, id: 34288 },
  { toyName: "Hot Wheels", toyMaker: "Mattel", cost: 5, id: 34289 },
  { toyName: "Nerf Gun", toyMaker: "Hasbro", cost: 15, id: 34290 },
  { toyName: "FurReal Friends", toyMaker: "Hasbro", cost: 50, id: 34291 },
  { toyName: "Play-Doh", toyMaker: "Hasbro", cost: 10, id: 34292 },
  { toyName: "Transformers", toyMaker: "Hasbro", cost: 25, id: 34293 },
  { toyName: "Monopoly", toyMaker: "Hasbro", cost: 30, id: 34294 },
];

app.get("/api/toys", (req, res) => {
  res.json(toys);
});

app.post("/api/toys", (req, res) => {
  toys.push(req.body);
  console.log(req.body);
  res.json(toys);
});

app.listen(port, () => {
  console.log("Example app is listening on port 8000!");
});
