import * as yup from "yup";

const UpdateHospitalValidation = yup.object().shape({
   

  email: yup.string().required('email is required'),
  username: yup.string().required('username is required'),
  password: yup.string().required('password is required'),
  lat: yup.string().required('lat is required'),
  lng: yup.string().required('lat is required'),
  description: yup.string().required('content is required'),
  adress: yup.string().required('image is required'),
   
  });

  export default UpdateHospitalValidation;