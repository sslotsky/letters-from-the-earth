import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { validator } from 'validate-this';
import { Form, FormGroup, FormInput, Save, Fieldset } from 'MODULES/shared/components';

export function StandardConsumer({ handleSubmit, ...props }) {
  return (
    <Form style={{ width: '75%' }}>
      <h1>Standard Consumer</h1>
      <Fieldset>
        <legend>Letter is from:</legend>
        <FormGroup>
          <Field name="from.first_name" component={FormInput} label="First Name" />
          <Field name="from.last_name" component={FormInput} label="Last Name" />
        </FormGroup>
        <FormGroup>
          <Field name="from.address" component={FormInput} label="Address" />
        </FormGroup>
        <FormGroup>
          <Field name="from.city" component={FormInput} label="City" />
          <Field name="from.state" component={FormInput} label="State" />
          <Field name="from.zip" component={FormInput} label="Zip" />
        </FormGroup>
      </Fieldset>
      <Fieldset>
        <legend>Letter is to:</legend>
        <FormGroup>
          <Field name="to.business_name" component={FormInput} label="Business Name" />
          <Field name="to.individual_name" component={FormInput} label="Individual Name" />
        </FormGroup>
        <FormGroup>
          <Field name="to.account_number" component={FormInput} label="Account Number" />
        </FormGroup>
        <FormGroup>
          <Field name="to.address" component={FormInput} label="Address" />
        </FormGroup>
        <FormGroup>
          <Field name="to.city" component={FormInput} label="City" />
          <Field name="to.state" component={FormInput} label="State" />
          <Field name="to.zip" component={FormInput} label="Zip" />
        </FormGroup>
      </Fieldset>
      <FormGroup>
        <Save {...props}>
          Submit
        </Save>
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
    form.validateChild('from', from => {
      from.validate('first_name', 'last_name', 'address', 'city', 'state', 'zip').satisfies(required);
    });

    form.validateChild('to', from => {
      from.validate('business_name', 'individual_name', 'address', 'city', 'state', 'zip').satisfies(required);
    });
  })
})(StandardConsumer);
