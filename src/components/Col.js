// @flow
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import breakpointClassNames from '../utils/breakpointClassNames';
import colClassNames from '../utils/colClassNames';
import { GridBreakpointType } from '../types';


export type Props = {
  className?: string;
  children?: React$Element<any>;
  tagName: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xsOffset?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
  xlOffset?: number;
  first?: boolean | GridBreakpoint;
  last?: boolean | GridBreakpoint;
};

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  first: PropTypes.oneOfType([PropTypes.bool, GridBreakpointType]),
  last: PropTypes.oneOfType([PropTypes.bool, GridBreakpointType]),
};

const Col = (props: Props) => {
  const {
    className,
    children,
    tagName,
    xs,
    sm,
    md,
    lg,
    xl,
    xsOffset,
    smOffset,
    mdOffset,
    lgOffset,
    xlOffset,
    first,
    last,
    ...rest
  } = props;

  return React.createElement(tagName, {
    className: classNames({
      col: !xs && !sm && !md && !lg && !xl,
      ...colClassNames('col-xs-%', xs),
      ...colClassNames('col-sm-%', sm),
      ...colClassNames('col-md-%', md),
      ...colClassNames('col-lg-%', lg),
      ...colClassNames('col-xl-%', xl),
      ...colClassNames('col-xs-offset-%', xsOffset),
      ...colClassNames('col-sm-offset-%', smOffset),
      ...colClassNames('col-md-offset-%', mdOffset),
      ...colClassNames('col-lg-offset-%', lgOffset),
      ...colClassNames('col-xl-offset-%', xlOffset),
      ...(typeof first === 'boolean'
        ? { 'col-first': first }
        : breakpointClassNames('col-%-first', first)
      ),
      ...(typeof last === 'boolean'
        ? { 'col-last': last }
        : breakpointClassNames('col-%-last', last)
      ),
    }, className),
    ...rest,
  }, children);
};

Col.propTypes = propTypes;

Col.defaultProps = {
  className: null,
  children: null,
  tagName: 'div',
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xsOffset: null,
  smOffset: null,
  mdOffset: null,
  lgOffset: null,
  xlOffset: null,
  first: false,
  last: false,
};


export default Col;
