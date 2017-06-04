// @flow
import template from './template';
import type { GridClasses } from '../types';

const colClassNames = (str: string, column: ?number): GridClasses => {
  const result = {};

  if (!column) {
    return result;
  }

  result[template(str, column)] = true;

  return result;
};

export default colClassNames;
