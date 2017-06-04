// @flow
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import breakpointClassNames from '../utils/breakpointClassNames';
import { GridBreakpointType } from '../types';


export type Props = {
  className?: string;
  children?: React$Element<any>;
  tagName: string;
  start?: GridBreakpoint;
  center?: GridBreakpoint;
  end?: GridBreakpoint;
  top?: GridBreakpoint;
  middle?: GridBreakpoint;
  bottom?: GridBreakpoint;
  around?: GridBreakpoint;
  between?: GridBreakpoint;
  reverse?: GridBreakpoint;
};

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
  start: GridBreakpointType,
  center: GridBreakpointType,
  end: GridBreakpointType,
  top: GridBreakpointType,
  middle: GridBreakpointType,
  bottom: GridBreakpointType,
  around: GridBreakpointType,
  between: GridBreakpointType,
  reverse: GridBreakpointType,
};

const Row = (props: Props) => {
  const {
    className,
    children,
    tagName,
    start,
    center,
    end,
    top,
    middle,
    bottom,
    around,
    between,
    reverse,
    ...rest
  } = props;

  return React.createElement(tagName, {
    className: classNames({
      row: true,
      ...breakpointClassNames('row-%-start', start),
      ...breakpointClassNames('row-%-center', center),
      ...breakpointClassNames('row-%-end', end),
      ...breakpointClassNames('row-%-top', top),
      ...breakpointClassNames('row-%-middle', middle),
      ...breakpointClassNames('row-%-bottom', bottom),
      ...breakpointClassNames('row-%-around', around),
      ...breakpointClassNames('row-%-between', between),
      ...breakpointClassNames('row-%-reverse', reverse),
    }, className),
    ...rest,
  }, children);
};

Row.propTypes = propTypes;

Row.defaultProps = {
  className: null,
  children: null,
  tagName: 'div',
  start: null,
  center: null,
  end: null,
  top: null,
  middle: null,
  bottom: null,
  around: null,
  between: null,
  reverse: null,
};


export default Row;
