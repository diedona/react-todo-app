import React from "react";

const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
}

function Header(props) {
    return (
        <header style={headerStyle}>
            <h1 style={{ fontSize: "25px", marginBottom: "15px", textAlign: "center" }}>ToDo Application</h1>
            <p style={{ fontSize: "19px" }}>Management of ToDo's</p>
        </header>
    );
}

export default Header;