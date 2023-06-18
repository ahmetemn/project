import * as yup from "yup";

const AddDoctorValidation = yup.object().shape({
   

  email: yup.string().required('email is required'),
  username: yup.string().required('username is required'),
  password: yup.string().required('password is required'),
  tag: yup.string().required('tag is required'),
  content: yup.string().required('content is required'),
   
  });

  export default AddDoctorValidation;