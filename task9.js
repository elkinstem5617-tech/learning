import { request } from "./request.js"

const newPost = { title: "test", body: "hello", userId: 1 };

const [status, data] = await request("http://localhost:3000/","users", "POST", newPost)

if (status === null) {
    console.log("Сервер не ответил")
} else {
    console.log(status, data)
}

const [status1, data1] = await request("http://localhost:3000/","users/11", "GET");

if (status1 === null) {
    console.log("Сервер не ответил")
} else {
    console.log(status1, data1)
}


