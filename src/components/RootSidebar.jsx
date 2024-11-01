import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { accentColor, primaryColor, textIconsColor } from "../colors";

export default function RootSidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    width: isCollapsed ? "80px" : "250px",
                    background: `linear-gradient(45deg, ${primaryColor}, ${accentColor})`,
                    minHeight: "100vh",
                    transition: "width 0.3s",
                    color: "white",
                    padding: isCollapsed ? "10px" : "20px",
                    overflowX: "hidden",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Navbar.Brand as={NavLink} to={"/"} style={{ color: "white", fontWeight: "bold", fontSize: isCollapsed ? "20px" : "24px" }}>
                        {isCollapsed ? "L" : "LMS"}
                    </Navbar.Brand>
                    <button onClick={toggleSidebar} style={{
                        background: "transparent",
                        border: "none",
                        color: "white",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        outline: "none",
                    }}>
                        {isCollapsed ? "→" : "←"}
                    </button>
                </div>
                <Nav className="flex-column mt-4">
                    <Nav.Link as={NavLink} to={"/"} style={{ color: textIconsColor, fontWeight: "bold", paddingLeft: isCollapsed ? "5px" : "10px" }}>
                        {isCollapsed ? "H" : "Home"}
                    </Nav.Link>
                    <Nav.Link as={NavLink} to={"/register"} style={{ color: textIconsColor, fontWeight: "bold", paddingLeft: isCollapsed ? "5px" : "10px" }}>
                        {isCollapsed ? "R" : "Register"}
                    </Nav.Link>
                    <Nav.Link as={NavLink} to={"/login"} style={{ color: textIconsColor, fontWeight: "bold", paddingLeft: isCollapsed ? "5px" : "10px" }}>
                        {isCollapsed ? "L" : "Login"}
                    </Nav.Link>
                </Nav>
            </div>
            <Container fluid style={{ padding: "20px" }}>
                {/* Main content rendered here */}
            </Container>
        </div>
    );
}
