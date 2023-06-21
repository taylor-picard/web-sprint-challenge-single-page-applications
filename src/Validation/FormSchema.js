import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('name must be at least 2 characters')
        .min(2)
})

export default formSchema;