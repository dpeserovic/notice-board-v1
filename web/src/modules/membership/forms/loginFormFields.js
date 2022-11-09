const loginFormFields = [
    {
        name: 'username',
        label: 'Username',
        placeholder: 'Enter Username',
        rules: 'required|string|between:5,25',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter Password',
        rules: 'required|string|between:5,25',
    },
];

export default loginFormFields;
