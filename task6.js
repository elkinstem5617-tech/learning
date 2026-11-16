import  getUsers  from "./api.js";

async function main() {

    const users = await getUsers();

    const usersMail = users.filter((user) => user.email.includes("biz"));

    const usersCity = users.map((user) => `Имя: ${user.name} Город: ${user.address.city}`);

    for (const peopleCity of usersCity) {
        console.log(peopleCity)
    };

    console.log(`пользователей с biz в email: ${usersMail.length}`);
}

main();