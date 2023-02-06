const LoginForm = [{
    name: "user_name",
    label: "User Name",
    required: true,
    type: "Text",
    validator: {
        minLength: 3
    }
}, {
    name: "password",
    label: "Password",
    required: true,
    type: "Password",
    validator: {
        minLength: 6
    }
}];

export default LoginForm;