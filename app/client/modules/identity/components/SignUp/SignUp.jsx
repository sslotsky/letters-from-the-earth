import React from 'react';
import { validator } from 'validate-this';
import { reduxForm, Field } from 'redux-form';
import Recaptcha from 'react-recaptcha';
import { toggle } from 'MODULES/shared/decorators';
import { Modal, GlyphButton, Form, FormInput, FormGroup, Save, Captcha } from 'MODULES/shared/components';
import * as rules from 'LIB/validation/rules';
import { Bottom } from './styles';

export function SignUp({ visible, open, close, handleSubmit, ...props }) {
  const k = process.env.CAPTCHA_KEY;
  return (
    <GlyphButton name="plus-square" onClick={open}>
      Sign Up
      <Modal visible={visible} close={close} title="Sign Up">
        <Form>
          <FormGroup>
            <Field component={FormInput} name="username" label="User Name" />
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

export default reduxForm({
  form: 'signUp',
  validate: values => validator(values, (form) => {
    form.validate('username', 'password', 'confirm', 'code').satisfies(rules.required);
    form.validate('confirm').satisfies(rules.matches('password'));
  })
})(toggle(SignUp));
