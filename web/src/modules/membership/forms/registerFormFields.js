const registerFormFields = [{
    name: 'email',
    label: 'Email',
    placeholder: 'Enter Email',
    rules: 'required|email|string|between:5,25',
}, {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter Password',
    rules: 'required|string|between:5,25',
}, {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
    rules: 'required|string|same:password',
}];

export default registerFormFields;