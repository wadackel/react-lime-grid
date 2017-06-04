// @flow
import PropTypes from 'prop-types';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GridBreakpoint = Breakpoint | Breakpoint[];
export type GridClasses = {
  [key: string]: boolean;
};

export const BreakpointType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);
export const GridBreakpointType = PropTypes.oneOfType([
  BreakpointType,
  PropTypes.arrayOf(BreakpointType),
]);
