import express from "express";
import { getUsers } from "./api.js";

const app = express();
app.use(express.json());

let usersList = await getUsers();
let userLastId = usersList.length;

app.get("/", async (req, res) => {
    res.send("Привет, это мой сервер!");
});

app.get("/users", (req, res) => {
    res.json(usersList);
});

app.get(`/users/:id`, (req, res) => {
    const userId = usersList.find((user) => user.id === Number(req.params.id))
    if (!userId) {
        return res.status(404).json({ error: "Пользователь не найден" });
    }
    res.json(userId)
})

app.post("/users", (req, res) => {
    const newMan = {...req.body, id: ++userLastId};
    usersList.push(newMan);
    res.status(201).json(newMan);
});

app.delete("/users/:id", (req, res) => { 
    const userId = usersList.find((user) => user.id === Number(req.params.id))
    if (userId){
        usersList = usersList.filter((deleteUser)=>
        deleteUser.id !== Number(req.params.id))
    res.status(200).json("Удален")
    } else {
        res.status(404).json({error: `Пользователь с ${req.params.id} не найден}`})
    }
})

app.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});
