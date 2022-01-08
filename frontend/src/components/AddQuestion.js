import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function AddQuestion() {
    const [category, setCategory] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [resource, setResource] = useState("");
    const [submitted, setSubmitted] = useState(false);

    async function postData(url = "/trivia", data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const ShowSubitted = () => {
        return (
            <div>
                <h2>{category}</h2>
                <h2>{question}</h2>
                <h2>{answer}</h2>
                <h2>{resource}</h2>
            </div>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form: ", e.target[2].value);
        const data = {};
        for (let i = 0; i < e.target.length - 1; i++) {
            data[e.target[i].name] = e.target[i].value;
        }
        if (data) {
            setSubmitted(true);
            setCategory(data.category);
            setQuestion(data.question);
            setAnswer(data.answer);
            setResource(data.resource);
        }
        postData("/trivia", data);
    };

    return (
        <div className="flex column">
            <form onSubmit={handleSubmit} className="flex column">
                <select name="category" type="select" placeholder="category">
                    <option>History</option>
                    <option>Science</option>
                    <option>Entertainment</option>
                    <option>Sports</option>
                    <option>Music</option>
                    <option>Other</option>
                </select>
                <input name="question" type="text" placeholder="Question" />
                <input name="answer" type="text" placeholder="Answer" />
                <input
                    name="resource"
                    type="text"
                    placeholder="Resource (optional)"
                />
                <Button variant="primary" type="submit" value="submit">
                    Submit
                </Button>
            </form>
            {submitted ? <ShowSubitted /> : null}
        </div>
    );
}

export default AddQuestion;
