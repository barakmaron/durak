export default function ValidateForm(values, props) {
    const errors = {};
    const { inputs } = props;
    inputs.forEach(field => {
        if (!values[field.name] && field?.required) {
            errors[field.name] = 'Required';
        } else if(field?.required && values[field.name].length < field.validator.minLength) {
            errors[field.name] = `Required value length of ${field.validator.minLength}`;
        } 
    });
    return errors;
}