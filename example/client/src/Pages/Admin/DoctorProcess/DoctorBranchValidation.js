import * as yup from "yup";

const DoctorBranchValidation = yup.object().shape({


    name: yup.string().required('branch is required'),
   

});

export default DoctorBranchValidation ;