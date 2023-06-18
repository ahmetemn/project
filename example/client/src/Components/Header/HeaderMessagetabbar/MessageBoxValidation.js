import * as yup from "yup";

const MessageBoxValidation = yup.object().shape({
   
  messages: yup.string().required('Mesaj is required')
  });

  export default MessageBoxValidation;