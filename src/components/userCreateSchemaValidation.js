import *as Yup from 'yup';

const userCreateSchemaValidation =  Yup.object().shape({
    fullname: Yup.string()
                .min(4, 'must be longer then 4 characters')
                .required('Required'),
    email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
    password: Yup.string()
                .min(8, "Must be longer than 8 characters")
                .required("Required"),
    address: Yup.string()
                .min(8, "Must be longer than 8 characters")
                .required("Required"),
    city: Yup.string()
                .min(8, "Must be longer than 8 characters")
                .required("Required"),
    zip: Yup.string()
                .min(3, "Must be longer than 3 characters")
                .required("Required"),
    
});

export default userCreateSchemaValidation;