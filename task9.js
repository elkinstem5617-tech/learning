import { request } from "./request.js"

const newPost = { title: "test", body: "hello", userId: 1 };

const [status, data] = await request("http://localhost:3000/","users/3", "GET")

if (status === null) {
    console.log("Сервер не ответил")
} else {
    console.log(status, data)
}




