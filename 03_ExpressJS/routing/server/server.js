import express from "express";
import router from "./routes/toy.routes";
const app = express();
const port = 8000;

app.use(express.json());
app.use("/api", router);

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

// app.get("/api/toys", (req, res) => {
//   res.json(toys);
// });

// app.post("/api/toys", (req, res) => {
//   toys.push(req.body);
//   console.log(req.body);
//   res.json(toys);
// });

// app.get("/api/toys/:id", (req, res) => {
//   console.log(req.params.id);
//   const getToyById = toys.find((toy) => toy.id == req.params.id);
//   res.json(getToyById);
// });

// app.put("/api/toys/:id", (req, res) => {
//   toys.forEach((toy, idx) => {
//     if (toy.id == req.params.id) {
//       toy = { ...toy, ...req.body };
//       toys[idx] = toy;
//     }
//   });
//   const updatedToy = toys.find((toy) => toy.id == req.params.id);
//   res.json(updatedToy);
// });

// app.delete("/api/toys/:id", (req, res) => {
//   const toyId = req.params.id;
//   const index = toys.findIndex((toy) => toy.id == toyId);
//   toys.splice(index, 1);
//   res.json(toys);
// });

app.listen(port, () => {
  console.log("Example app is listening on port 8000!");
});

export { toys };
