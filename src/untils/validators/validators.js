export const required = (value) => {
  if(value) {
    return undefined;
  } else {
    return 'Field is required';
  }
}

export const maxLengthCreator = (max) => (value) => {
  if(value.length > max) return `Must be ${max} characters or less`;
  return undefined;
}