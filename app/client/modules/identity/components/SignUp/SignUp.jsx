import React from 'react';
import { validator } from 'validate-this';
import { reduxForm, Field } from 'redux-form';
import Recaptcha from 'react-recaptcha';
import { toggle, inject } from 'MODULES/shared/decorators';
import { Modal, GlyphButton, Form, FormInput, FormGroup, Save, Captcha } from 'MODULES/shared/components';
import * as rules from 'LIB/validation/rules';
import api from 'APP_ROOT/api';
import { Bottom } from './styles';
import formSubmission from 'MODULES/shared/actions/formSubmission';
import { setUser } from 'MODULES/identity/actions';

export function SignUp({ visible, open, close, handleSubmit, ...props }) {
  return (
    <GlyphButton name="plus-square" onClick={open}>
      Sign Up
      <Modal visible={visible} close={close} title="Sign Up">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Field component={FormInput} name="username" label="User Name" asyncField />
          </FormGroup>
          <FormGroup>
            <Field component={FormInput} name="password" label="Password" type="password" />
          </FormGroup>
          <FormGroup>
            <Field component={FormInput} name="confirm" label="Confirm Password" type="password" />
          </FormGroup>
          <FormGroup>
          </FormGroup>
          <Bottom>
            <Save {...props}>
              Sign Up
            </Save>
            <Field name="code" component={Captcha} /> 
          </Bottom>
        </Form>
      </Modal>
    </GlyphButton>
  );
}

const withSubmit = inject(() => ({
  onSubmit: formSubmission(api.identity.signup)
}));

const form = reduxForm({
  form: 'signUp',
  validate: values => validator(values, (form) => {
    form.validate('username', 'password', 'confirm', 'code').satisfies(rules.required);
    form.validate('confirm').satisfies(rules.matches('password'));
  }),
  onSubmitSuccess: (resp, dispatch, { close }) => dispatch(setUser(resp.data.user)).then(close),
  asyncValidate: (values) => {
    return api.identity.checkEligibility(values.username).then((resp) => {
      if (!resp.data.eligible) {
        return Promise.reject({
          username: ['Already taken']
        });
      }
    });
  },
  asyncBlurFields: ['username']
});

export default toggle(withSubmit(form(SignUp)));
