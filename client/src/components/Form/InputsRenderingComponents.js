import { TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';

const renderTextField = ({
    input,
    label,
    meta: {
        touched,
        error
    },
    ...custom
}) => {
    return <TextField
    label={label}
    error={touched && error}
    {...input}
    {...custom}
    helperText={touched && error}
    variant="outlined" />;
};

const renderSelectField = ({
    input,
    label,
    meta: {
        touched,
        error
    },
    children,
    ...custom
}) => {
    return <Select
    label={label}
    error={touched && error}
    { ...input }
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    { ...custom } />;
};

const renderCheckBox = ({
    input, 
    label
}) => {
    return <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange} />;
};

const InputsRenderingComponents = {
    "Text": renderTextField,
    "Password": renderTextField,
    "Number": renderTextField,
    "CheckBox": renderCheckBox,
    "Select": renderSelectField
};

export default InputsRenderingComponents;