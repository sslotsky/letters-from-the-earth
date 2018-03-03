import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { validator } from "validate-this";
import emailValidator from "email-validator";
import {
  Form,
  FormGroup,
  FormInput,
  Fieldset,
  Save,
  Legend
} from "MODULES/shared/components";
import * as rules from "LIB/validation/rules";
import api from "APP_ROOT/api";

const validate = values =>
  validator(values, form => {
    form.validate("first_name", "last_name", "email").satisfies(rules.required);
    form.validate("email").satisfies(rules.validEmail);
  });

const simpleMemoize = fn => {
  let lastArg;
  let lastResult;
  return arg => {
    if (!lastArg || arg !== lastArg) {
      lastArg = arg;
      lastResult = fn(arg);
    }
    return lastResult;
  };
};

const eligible = simpleMemoize(async email => {
  if (!email || !emailValidator.validate(email)) {
    return [];
  }

  const { data: { eligible } } = await api.identity.checkEligibility(email);

  if (!eligible) {
    return ["Already taken"];
  }
});

const submit = data => api.employees.create(data);

export default function NewEmployeeForm() {
  return (
    <FinalForm
      onSubmit={submit}
      validate={validate}
      render={({ handleSubmit, ...rest }) => (
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <Legend>Employee Details</Legend>
            <FormGroup>
              <Field
                name="first_name"
                component={FormInput}
                label="First Name"
              />
              <Field name="last_name" component={FormInput} label="Last Name" />
              <Field
                name="email"
                component={FormInput}
                label="Email Address"
                validate={eligible}
                asyncField
              />
            </FormGroup>
            <FormGroup>
              <Save {...rest}>Submit</Save>
            </FormGroup>
          </Fieldset>
        </Form>
      )}
    />
  );
}
