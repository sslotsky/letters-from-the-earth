import React from "react";
import Recaptcha from "react-recaptcha";

export default function Captcha({ input }) {
  const clear = () => input.onChange("");

  return (
    <Recaptcha
      sitekey={process.env.CAPTCHA_KEY}
      render="explicit"
      verifyCallback={input.onChange}
      expiredCallback={clear}
    />
  );
}
