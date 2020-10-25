import { Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

export const NavBar = () => (
    <Navbar className="navbar" fixed="top" expand="lg">
        <Navbar.Brand href="/">

        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="link" href="/home">Home</Nav.Link>
                <Nav.Link className="link" href="/queue">Join Queue</Nav.Link>
                <Nav.Link className="link" href="/game">Join Game</Nav.Link>
                <Nav.Link className="link" href="/about">About</Nav.Link>

            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

/*
<i className="fa fa-plane">
    <span className="title"> Office Hour Queue </span>
</i>
*/