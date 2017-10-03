export const required = (val) => {
  if (!val) {
    return 'Required'
  }
}

export const matches = field => (val, values) => {
  if (val !== values[field]) {
    return 'Does not match'
  }
}
