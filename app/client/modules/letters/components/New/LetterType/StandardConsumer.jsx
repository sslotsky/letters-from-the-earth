import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { validator } from 'validate-this';
import { Form, FormGroup, FormInput, Save, Fieldset } from 'MODULES/shared/components';
import Submit from './Submit';

export function StandardConsumer({ handleSubmit, ...props }) {
  return (
    <Form style={{ width: '75%' }}>
      <h1>Standard Consumer</h1>
      <Fieldset>
        <legend>Letter is from:</legend>
        <FormGroup>
          <Field name="first_name" component={FormInput} label="First Name" />
          <Field name="last_name" component={FormInput} label="Last Name" />
        </FormGroup>
        <FormGroup>
          <Field name="address" component={FormInput} label="Address" />
        </FormGroup>
        <FormGroup>
          <Field name="city" component={FormInput} label="City" />
          <Field name="state" component={FormInput} label="State" />
          <Field name="zip" component={FormInput} label="Zip" />
        </FormGroup>
      </Fieldset>
      <Fieldset>
        <legend>Letter is to:</legend>
        <FormGroup>
          <Field name="business_name" component={FormInput} label="Business Name" />
          <Field name="individual_name" component={FormInput} label="Individual Name" />
        </FormGroup>
        <FormGroup>
          <Field name="account_number" component={FormInput} label="Account Number" />
        </FormGroup>
        <FormGroup>
          <Field name="business_address" component={FormInput} label="Address" />
        </FormGroup>
        <FormGroup>
          <Field name="business_city" component={FormInput} label="City" />
          <Field name="business_state" component={FormInput} label="State" />
          <Field name="business_zip" component={FormInput} label="Zip" />
        </FormGroup>
      </Fieldset>
      <FormGroup>
        <Submit {...props} />
      </FormGroup>
    </Form>
  );
}

const required = val => {
  if (!val) {
    return 'Required';
  }
};

export default reduxForm({
  form: 'standardConsumer',
  validate: values => validator(values, form => {
    form.validate(
      'first_name',
      'last_name',
      'address',
      'city',
      'state',
      'zip',
      'business_name',
      'business_address',
      'business_city',
      'business_state',
      'business_zip'
    ).satisfies(required);
  })
})(StandardConsumer);
