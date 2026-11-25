export async function request (host, address, methodFunc, obj) {

    try {
        const response = await fetch(`${host}${address}`, {
            method: methodFunc,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });

        console.log(response.status);
        console.log(response.ok);
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        console.log("error", error.message);
        return[null, error.message]
    }
}

