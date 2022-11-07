import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { defaultTemplate } from 'common/hoc';

function LoginPage(props) {
    const { membershipModuleStore: { loginViewStore: { goToRegister } } } = props;
    return (
        <div className="center">
            <h1>Login</h1>
            <Form>
                <Row className="justify-content-md-center mb-3" md={5}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3" md={5}>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>
                <Button type="button" className="mb-3" variant="danger">Log in</Button>
            </Form>
            <Button type="button" variant="warning" onClick={goToRegister}>Don't have an account? Register</Button>
        </div>
    );
}

export default defaultTemplate(LoginPage);
