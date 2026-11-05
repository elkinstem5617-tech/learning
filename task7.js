async function getUsers() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

        if (!response.ok) {
            throw new Error(`Сервер ответил ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.log("error", error.message);
        return [];
    }
}

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

    console.log(userBizMail[0] )
}

main();