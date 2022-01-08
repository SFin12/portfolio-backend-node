import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function GetQuestion() {
    const [category, setCategory] = useState("");
    const [submitted, setSubmitted] = useState(false);

    async function getData(url = "/trivia") {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        const dbData = async () => {
            const data = await getData(`/trivia/${category}`);
            console.log(data);
        };
        dbData();
    };

    return (
        <div className="flex column">
            <form onSubmit={handleSubmit} className="flex column">
                <select
                    name="category"
                    type="select"
                    placeholder="category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>History</option>
                    <option>Science</option>
                    <option>Entertainment</option>
                    <option>Sports</option>
                    <option>Music</option>
                    <option>Other</option>
                </select>
                <Button variant="primary" type="submit" value="submit">
                    Submit
                </Button>
            </form>
            {submitted ? null : null}
        </div>
    );
}

export default GetQuestion;
