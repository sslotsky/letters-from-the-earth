import React from "react";
import { Submit } from "MODULES/shared/components/Layout/Page";

export default function Save({ invalid, submitting, children, disabled }) {
  return (
    <Submit disabled={invalid || submitting || disabled}>
      {children}
    </Submit>
  );
}
