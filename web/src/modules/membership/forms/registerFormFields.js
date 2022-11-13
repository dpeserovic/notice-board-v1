const registerFormFields = [
    {
        name: 'username',
        label: 'Username',
        placeholder: 'Enter Username',
        type: 'text',
        rules: 'required|string|between:5,25',
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter Email',
        type: 'text',
        rules: 'required|email|string|between:5,25',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter Password',
        type: 'password',
        rules: 'required|string|between:5,25',
    },
    {
        name: 'confirmPassword',
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        type: 'password',
        rules: 'required|string|same:password',
    }
];

export default registerFormFields;
