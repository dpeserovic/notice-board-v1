import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { defaultTemplate } from 'common/hoc';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { RotatingLines } from 'react-loader-spinner';

function MainLayout(props) {
    const { membershipModuleStore: { loginViewStore: { isUserAuthenticated, isUserInState, user, logout } }, children, globalLoaderStore: { isLoading } } = props;
    const isExpanded = false;
    return (
        <>
            <Navbar key={isExpanded} className="mb-3" bg="danger" variant="dark" expand={isExpanded}>
                <Container fluid>
                    <Navbar.Brand>Notice Board</Navbar.Brand>
                    {isUserAuthenticated && isUserInState && !isLoading ?
                        <>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${isExpanded}`} />
                            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${isExpanded}`} aria-labelledby={`offcanvasNavbarLabel-expand-${isExpanded}`} placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${isExpanded}`}>
                                        {`${user.displayName} [${user.roles[0].slice(0, -1).toUpperCase()}]`} <button type="button" className="btn-icon btn-icon-danger" onClick={logout}><AiOutlinePoweroff /></button>
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
                        null
                    }
                </Container>
            </Navbar>
            {isLoading ?
                <div className="center">
                    <RotatingLines strokeColor="red" strokeWidth="2.5" animationDuration="1" width="90" visible={true} />
                </div>
                :
                children
            }
        </>
    );
}

export default defaultTemplate(MainLayout);