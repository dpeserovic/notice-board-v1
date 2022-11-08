const loginFormFields = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter Email',
        rules: 'required|email|string|between:5,25',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter Password',
        rules: 'required|string|between:5,25',
    },
];

export default loginFormFields;
