import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
    return (
        <>
            <NavLink to="/question">
                <Button variant="primary">Get Questions</Button>
            </NavLink>
            <NavLink to="/addQuestion">
                <Button variant="primary">Add Questions</Button>
            </NavLink>
        </>
    );
}
