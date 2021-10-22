const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser')
const app = express();
app.use(cors());
app.use(express.json())
// app.use(bodyParser.json())
const port = 5000;

app.get("/", (req, res) => {
  res.send("This is my second Node.js code.");
});

const users = [
  { id: 0, name: "Sourav kumar nath", email: "souravnath1245@gamil.com" },
  { id: 1, name: "saikat kumar nath", email: "sajeebnath1245@gamil.com" },
  { id: 2, name: "Sajeeb kumar nath", email: "saikatnath1245@gamil.com" },
  { id: 3, name: "Sumon kumar nath", email: "sumonnath1245@gamil.com" },
  { id: 4, name: "Pranoy kumar nath", email: "pranoynath1245@gamil.com" },
  { id: 5, name: "susmita kumar nath", email: "susmitanath1245@gamil.com" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter(
      (user) => user.name.toLocaleLowerCase() === search
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});


app.post("/users", (req,res)=>{
  console.log("backend data", req.body) 
  let newUser= req.body;
  newUser.id = users.length;
  users.push(newUser)
  // res.send(JSON.stringify(newUser))
  res.json(newUser)
})
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user.name);
});

app.get("");

app.listen(port, () => {
  console.log("listening to port", port);
});
