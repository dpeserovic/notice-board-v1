import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { defaultTemplate } from 'common/hoc';

function MainLayout(props) {
    const { membershipModuleStore: { loginViewStore: { isUserAuthenticated, isUserInState, user } }, children } = props;
    const isExpanded = false;
    return (
        <>
            <Navbar key={isExpanded} className="mb-3" bg="danger" variant="dark" expand={isExpanded}>
                <Container fluid>
                    <Navbar.Brand>Notice Board</Navbar.Brand>
                    {isUserAuthenticated && isUserInState ?
                        <>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${isExpanded}`} />
                            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${isExpanded}`} aria-labelledby={`offcanvasNavbarLabel-expand-${isExpanded}`} placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${isExpanded}`}>
                                        {user.displayName}
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link>Page 1</Nav.Link>
                                        <Nav.Link>Page 2</Nav.Link>
                                        <Nav.Link>Page 3</Nav.Link>
                                        <Nav.Link>Page 4</Nav.Link>
                                        <Nav.Link>Page 5</Nav.Link>
                                        <Nav.Link>Page 6</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </>
                        :
                        null}
                </Container>
            </Navbar>
            {children}
        </>
    );
}

export default defaultTemplate(MainLayout);