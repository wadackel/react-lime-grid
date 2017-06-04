// @flow
import template from './template';
import type { Breakpoint, GridBreakpoint, GridClasses } from '../types';

const breakpointClassNames = (str: string, breakpoint: ?GridBreakpoint): GridClasses => {
  const result = {};

  if (!breakpoint) {
    return result;
  }

  (typeof breakpoint === 'string' ? [breakpoint] : breakpoint).forEach((key: Breakpoint) => {
    result[template(str, key)] = true;
  });

  return result;
};

export default breakpointClassNames;
