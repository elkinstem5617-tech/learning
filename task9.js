import { request } from "./request.js"

const newPost = { title: "test", body: "hello", userId: 1 };

//const [status, data] = await request("http://localhost:3000/","users", "POST", newPost)

const resultRequest = function(statusFromSite, dataFromSite) {
    if (statusFromSite === null) {
    console.log("Сервер не ответил")
} else {
    console.log(statusFromSite, dataFromSite)
}
};

//resultRequest(status, data);

const [status1, data1] = await request("http://localhost:3000/","users/3", "DELETE");

resultRequest(status1, data1);


