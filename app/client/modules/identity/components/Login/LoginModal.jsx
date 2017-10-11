import React from 'react';
import { validator } from 'validate-this';
import { reduxForm, Field } from 'redux-form';
import { inject } from 'MODULES/shared/decorators';
import { Modal, Form, FormInput, FormGroup, Save } from 'MODULES/shared/components';
import * as rules from 'LIB/validation/rules';
import api from 'APP_ROOT/api';
import formSubmission from 'MODULES/shared/actions/formSubmission';
import { setUser } from 'MODULES/identity/actions';
import ErrorAlert from 'MODULES/shared/components/Forms/ErrorAlert';

export function Login({ visible, open, close, handleSubmit, ...props }) {
  return (
    <Modal visible={visible} close={close} title="Log In">
      <Form onSubmit={handleSubmit}>
        <Field
          name="credentials"
          component={ErrorAlert}
        />
        <FormGroup>
          <Field component={FormInput} name="username" label="User Name" />
        </FormGroup>
        <FormGroup>
          <Field component={FormInput} name="password" label="Password" type="password" />
        </FormGroup>
        <FormGroup>
        </FormGroup>
        <FormGroup>
          <Save {...props}>
            Login
          </Save>
        </FormGroup>
      </Form>
    </Modal>
  );
}

const withSubmit = inject(() => ({
  onSubmit: formSubmission(api.identity.login)
}));

const form = reduxForm({
  form: 'login',
  validate: values => validator(values, (form) => {
    form.validate('username', 'password').satisfies(rules.required);
  }),
  onSubmitSuccess: (resp, dispatch, { close }) => dispatch(setUser(resp.data.user)).then(close)
});

export default withSubmit(form(Login));
