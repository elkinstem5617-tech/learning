import { request } from "./request.js"

const newPost = { title: "test", body: "hello", userId: 1 };

await request("posts", "POST", newPost)




