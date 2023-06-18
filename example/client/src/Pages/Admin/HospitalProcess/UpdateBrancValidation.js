import * as yup from "yup";

const UpdateBrancValidation = yup.object().shape({
   

  name: yup.string().required('Branch Name  is required'),

   
  });

  export default UpdateBrancValidation;