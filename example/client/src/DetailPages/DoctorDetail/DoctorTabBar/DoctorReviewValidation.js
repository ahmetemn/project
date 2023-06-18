import * as yup from "yup";

const DoctorReviewValidations = yup.object().shape({
   
    yorum: yup.string().required('Comment is required')
   
   
  });

  export default DoctorReviewValidations;