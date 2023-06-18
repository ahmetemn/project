import * as yup from "yup";

const AddBranchValidation = yup.object().shape({


    name: yup.string().required('branch is required'),
   

});

export default AddBranchValidation;