export async function getUsers() {
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