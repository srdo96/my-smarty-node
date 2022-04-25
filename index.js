const express = require("express");
const res = require("express/lib/response");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
//add comment
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Node Js");
});

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Howell@april.biz",
  },
  { id: 3, name: "Clementine Bauch", email: "Bauch@april.biz" },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "Lebsack@yahoo.biz",
  },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name;
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.post("/user", (req, res) => {
  console.log("body", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users.find((u) => u.id === parseInt(id));
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening on Port", port);
});
