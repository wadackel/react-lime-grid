// @flow
const template = (str: string, value: string | number): string => (
  str.replace('%', `${value}`)
);

export default template;
