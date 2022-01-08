import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import "./App.css";
import AddQuestion from "./components/AddQuestion";
import GetQuestion from "./components/GetQuestion";
import get from "./utils/get";

function App() {
    useEffect(() => {
        async function getUsers() {
            return get("/trivia");
        }
        console.log(getUsers());
    }, []);
    return (
        <React.Fragment>
            <nav>
                <Nav />
            </nav>
            <div className="flex center">
                <h1 className="title">Trivia Questions</h1>
            </div>
            <div className="flex center">
                <Routes>
                    <Route path="/" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/question" element={<GetQuestion />} />
                    <Route path="/addQuestion" element={<AddQuestion />} />
                </Routes>
            </div>
        </React.Fragment>
    );
}

export default App;
