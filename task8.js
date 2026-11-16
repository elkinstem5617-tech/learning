import { getUsers } from "./api.js";
import { readFile, writeFile } from "node:fs/promises";

async function main() {

    const users = await getUsers();

    const usersNameMail = users.map(({name, email, address: { city } }) => ({name, email, city}));

    const textUsers = JSON.stringify(usersNameMail, null, 2);

    const fileName = "users.json";

    try {
    await writeFile(fileName, textUsers, "utf-8");
    
    const text = await readFile (fileName, "utf-8");
    
    const objText = JSON.parse(text);
    console.log(objText.length);

    } catch (error) {
        console.log("error", error.message);
    }
};

main()