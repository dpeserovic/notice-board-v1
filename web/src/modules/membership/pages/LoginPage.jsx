import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { defaultTemplate } from 'common/hoc';

function LoginPage(props) {
    const { membershipModuleStore: { loginViewStore: { loginForm, goToRegister } } } = props;
    return (
        <div className="center">
            <h1>Login</h1>
            <Form>
                <Row className="justify-content-md-center mb-3" md={5}>
                    <Form.Group>
                        <Form.Label>{loginForm.$('username').label}</Form.Label>
                        <Form.Control {...loginForm.$('username').bind()} />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3" md={5}>
                    <Form.Group>
                        <Form.Label>{loginForm.$('password').label}</Form.Label>
                        <Form.Control {...loginForm.$('password').bind()} />
                    </Form.Group>
                </Row>
                <Button type="button" className="mb-3" variant="danger" onClick={loginForm.onSubmit}>Log in</Button>
            </Form>
            <Button type="button" variant="warning" onClick={goToRegister}>Don't have an account? Register</Button>
        </div>
    );
}

export default defaultTemplate(LoginPage);
