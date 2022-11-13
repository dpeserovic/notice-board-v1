const loginFormFields = [
    {
        name: 'username',
        label: 'Username',
        placeholder: 'Enter Username',
        type: 'text',
        rules: 'required|string|between:5,25',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter Password',
        type: 'password',
        rules: 'required|string|between:5,25',
    },
];

export default loginFormFields;
