import React from "react";

export default function Login(props) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    );
}
