import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { defaultTemplate } from 'common/hoc';

function RegistrationPage(props) {
    const { membershipModuleStore: { registerViewStore: { goToLogin } } } = props;
    return (
        <div className="center">
            <h1>Register</h1>
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
                <Row className="justify-content-md-center mb-3" md={5}>
                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>
                <Button type="button" className="mb-3" variant="danger">Sign up</Button>
            </Form>
            <Button type="button" variant="warning" onClick={goToLogin}>Have an account? Log in</Button>
        </div>
    );
}

export default defaultTemplate(RegistrationPage);
