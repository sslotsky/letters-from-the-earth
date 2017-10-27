import React from 'react';
import { reduxForm, Field, FormSection } from 'redux-form';
import { withRouter } from 'react-router';
import { composables } from '@orange-marmalade/paginate-this';
import { validator } from 'validate-this';
import { inject, redirectOnSubmit } from 'MODULES/shared/decorators';
import { Form, FormGroup, FormInput, Save, Fieldset, Legend } from 'MODULES/shared/components';
import api from 'APP_ROOT/api';
import formSubmission from 'MODULES/shared/actions/formSubmission';
import Submit from './Submit';

export function StandardBusiness({ handleSubmit, ...props }) {
  return (
    <Form onSubmit={handleSubmit}>
      <FormSection name="details" component="div">
        <Fieldset>
          <Legend>Letter is from</Legend>
          <FormGroup>
            <Field name="business_name" component={FormInput} label="Business Name" />
            <Field name="individual_name" component={FormInput} label="Your Name" />
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
        <Fieldset>
          <Legend>Letter is to</Legend>
          <FormGroup>
            <Field name="first_name" component={FormInput} label="First Name" />
            <Field name="last_name" component={FormInput} label="Last Name" />
          </FormGroup>
          <FormGroup>
            <Field name="account_number" component={FormInput} label="Account Number" />
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
      </FormSection>
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

const withSubmit = inject(({ match }) => ({
  initialValues: {
    purpose: match.params.type
  },
  onSubmit: formSubmission(api.letterRequests.of('standard_business_letters'))
}));

const form = reduxForm({
  form: 'standardBusiness',
  validate: values => validator(values, form => {
    form.validateChild('details', (details) => {
      details.validate(
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
    });
  })
});

const redirect = redirectOnSubmit('/dashboard');
export default withRouter(withSubmit(redirect(form(StandardBusiness))));

