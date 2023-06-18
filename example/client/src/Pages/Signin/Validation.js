import * as  yup from "yup";

let validations = yup.object().shape({
    username: yup.string().required('UserName Required'),
    email: yup.string().email('Geçerli bir email girin.').required('E-mail Required'),
    password: yup.string().min(8, 'Your password must be at least 8 characters.').required('Password Required'),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "Passwords do not match").required("Password Confirm Required"),
});

export default validations;