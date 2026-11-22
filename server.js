import express from "express";
import { getUsers } from "./api.js";

const app = express();
app.use(express.json());

let usersList = await getUsers();

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
    const newMan = {...req.body, id: usersList.length + 1};
    usersList.push(newMan);
    res.status(201).json(newMan);
});

app.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});
