import React from "react";
import { validator } from "validate-this";
import { reduxForm, Field } from "redux-form";
import Recaptcha from "react-recaptcha";
import { inject } from "MODULES/shared/decorators";
import {
  Modal,
  GlyphButton,
  Form,
  FormInput,
  FormGroup,
  Save,
  Captcha
} from "MODULES/shared/components";
import * as rules from "LIB/validation/rules";
import api from "APP_ROOT/api";
import { Bottom } from "./styles";
import formSubmission from "MODULES/shared/actions/formSubmission";
import { toasty } from "APP_ROOT/Toast";

export function SignUpModal({ visible, close, handleSubmit, ...props }) {
  return (
    <Modal visible={visible} close={close} title="Sign Up">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Field
            component={FormInput}
            name="email"
            label="Email Address"
            asyncField
          />
        </FormGroup>
        <FormGroup>
          <Field
            component={FormInput}
            name="password"
            label="Password"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Field
            component={FormInput}
            name="confirm"
            label="Confirm Password"
            type="password"
          />
        </FormGroup>
        <FormGroup />
        <Bottom>
          <Save {...props}>
            Sign Up
          </Save>
          <Field name="code" component={Captcha} />
        </Bottom>
      </Form>
    </Modal>
  );
}

const withSubmit = inject(() => ({
  onSubmit: formSubmission(api.identity.signup)
}));

const form = reduxForm({
  form: "signUp",
  validate: values =>
    validator(values, form => {
      form
        .validate("email", "password", "confirm", "code")
        .satisfies(rules.required);
      form.validate("email").satisfies(rules.validEmail);
      form.validate("confirm").satisfies(rules.matches("password"));
    }),
  onSubmitSuccess: (resp, dispatch, { close }) => {
    close();
    toasty.toast(`We've sent a confirmation email to ${resp.data.user.email}`);
  },
  asyncValidate: values => {
    return api.identity.checkEligibility(values.email).then(resp => {
      if (!resp.data.eligible) {
        return Promise.reject({
          email: ["Already taken"]
        });
      }
    });
  },
  asyncBlurFields: ["email"]
});

export default withSubmit(form(SignUpModal));
