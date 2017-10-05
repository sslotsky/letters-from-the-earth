import { SubmissionError } from 'redux-form';

export default function formSubmission(submit) {
  return data => submit(data).catch((err) => {
    if (err.response.status === 422) {
      throw new SubmissionError(err.response.data.errors);
    } else {
      throw err;
    }
  });
}

