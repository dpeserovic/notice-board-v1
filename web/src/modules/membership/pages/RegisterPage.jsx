import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { defaultTemplate } from 'common/hoc';

function RegisterPage(props) {
    const { membershipModuleStore: { registerViewStore: { registerForm, goToLogin } } } = props;
    return (
        <div className="center">
            <h1>Register</h1>
            <Form>
                <Row className="justify-content-md-center mb-3" md={5}>
                    <Form.Group>
                        <Form.Label>{registerForm.$('username').label}</Form.Label>
                        <Form.Control {...registerForm.$('username').bind()} />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3" md={5}>
                    <Form.Group>
                        <Form.Label>{registerForm.$('email').label}</Form.Label>
                        <Form.Control {...registerForm.$('email').bind()} />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3" md={5}>
                    <Form.Group>
                        <Form.Label>{registerForm.$('password').label}</Form.Label>
                        <Form.Control {...registerForm.$('password').bind()} />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3" md={5}>
                    <Form.Group>
                        <Form.Label>{registerForm.$('confirmPassword').label}</Form.Label>
                        <Form.Control {...registerForm.$('confirmPassword').bind()} />
                    </Form.Group>
                </Row>
                <Button type="button" className="mb-3" variant="danger" onClick={registerForm.onSubmit}>Sign up</Button>
            </Form>
            <Button type="button" variant="warning" onClick={goToLogin}>Have an account? Log in</Button>
        </div>
    );
}

export default defaultTemplate(RegisterPage);
