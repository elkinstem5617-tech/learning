import { request } from "./request.js"

const newPost = { title: "test", body: "hello", userId: 1 };

const dataRequest = await request("http://localhost:3000/","users/3333", "GET")

console.log(dataRequest)




