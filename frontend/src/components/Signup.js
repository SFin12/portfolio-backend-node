import React, { useState } from "react";
import post from "../utils/post";

export default function Signup(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function postNewUser(username, password) {
        const path = "/users/signup";
        const data = {
            username: username,
            password: password,
        };
        console.log(post(path, data));
    }

    function handleSubmit(e) {
        e.preventDefault();

        postNewUser(username, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
