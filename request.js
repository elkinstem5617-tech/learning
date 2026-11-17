export async function request (address, methodFunc, obj) {

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${address}`, {
            method: methodFunc,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });

        console.log(response.status);
        console.log(response.ok);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log("error", error.message);
    }
}