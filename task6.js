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

    const usersCity = users.map((user) => `Имя: ${user.name} Город: ${user.address.city}`);

    for (const peopleCity of usersCity) {
        console.log(peopleCity)
    };

    console.log(`пользователей с biz в email: ${usersMail.length}`);
}

main();