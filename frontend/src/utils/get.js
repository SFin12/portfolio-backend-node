export default async function get(path) {
    const url = "https://localhost:5443" + path;
    const response = await fetch(url, {
        method: "GET",
    });
    return response.json();
}
