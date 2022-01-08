export default async function post(path, data) {
    const url = "https://localhost:5443" + path;
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const printable = await response;
    console.log(printable);
    return response.json();
}
