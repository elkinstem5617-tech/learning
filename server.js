import express from "express";
import { getUsers } from "./api.js";

const app = express();

app.get("/", async (req, res) => {
    res.send("Привет, это мой сервер!");
});

app.get("/users", async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

app.get(`/users/:id`, async (req, res) => {
    const users = await getUsers();
    const userId = users.find((user) => user.id === Number(req.params.id))
    if (!userId) {
        return res.status(404).json({ error: "Пользователь не найден" });
    }
    res.json(userId)
})

app.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});
