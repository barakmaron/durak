import React from 'react';
import InputsRenderingComponents from './InputsRenderingComponents';
import { Field, reduxForm } from 'redux-form';
import { Button } from "@material-ui/core";
import ValidateForm from './ValidateForm';

const Form = ({
  inputs,
  handleSubmit, 
  pristine, 
  reset, 
  submitting,
  enableRest = false,
  submitButtonLabel = "submit"
}) => {
  return (<form onSubmit={handleSubmit} className="w-fit flex gap-4 flex-col items-center py-4">
    {inputs.map((input, index) => {
      return <Field {...input} key={`${input.name}-${index}`} component={InputsRenderingComponents[input.type]} />;
    })}
    <div>
      <Button type="submit" disabled={pristine || submitting} variant="outlined">{submitButtonLabel}</Button>
      { enableRest && <Button type="button" disabled={pristine || submitting} variant="outlined" onClick={reset}>
        Clear Values
      </Button>}
    </div>
  </form>);
}

export default reduxForm({
  validate: ValidateForm
})(Form);