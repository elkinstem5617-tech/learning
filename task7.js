import { getUsers } from "./api.js"

async function main() {

    const users = await getUsers();

    const usersMail = users.filter((user) => user.email.includes("biz"));

    const usersCity = users.map(({ name, address: { city } }) => `Имя: ${name} Город: ${city}`);

    for (const peopleCity of usersCity) {
        console.log(peopleCity)
    };

    const userBizMail = users.map((userBiz) => ({ ...userBiz, hasBiz: userBiz.email.includes("biz") }));

    const usersHasBiz = userBizMail.filter((user) => user.hasBiz === true);

    console.log(`пользователей с biz в email: ${usersHasBiz.length}`);

    console.log(userBizMail[0])
}

main();