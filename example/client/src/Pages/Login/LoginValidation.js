import * as yup from "yup";

const Loginvalidations = yup.object().shape({
   
    email: yup.string().email('Geçerli bir email girin.').required('E-mail is Required'),
    password:yup.string().min(8 , 'Parolanız en az 8 karakter olmalı.').required(' Name is Required'),
   
  });

  export default Loginvalidations;