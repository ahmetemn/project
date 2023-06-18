import * as yup from "yup";

const DoctorInfoValidation = yup.object().shape({


    username: yup.string().required('Name is required'),

    content:yup.string().required('Content  name  is required'),
    email:yup.string().required('Email name  is required'),
    password:yup.string().required('Password   is required'),
    tag:yup.string().required('Tag name  is required'),


});

export default DoctorInfoValidation ;