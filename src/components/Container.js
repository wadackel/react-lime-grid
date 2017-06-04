// @flow
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export type Props = {
  className?: string;
  children?: React$Element<any>;
  tagName: string;
  fluid?: boolean;
};

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
  fluid: PropTypes.bool,
};

const Container = (props: Props) => {
  const {
    className,
    children,
    tagName,
    fluid,
    ...rest
  } = props;

  return React.createElement(tagName, {
    className: classNames({
      container: !fluid,
      'container-fluid': fluid,
    }, className),
    ...rest,
  }, children);
};

Container.propTypes = propTypes;

Container.defaultProps = {
  className: null,
  children: null,
  tagName: 'div',
  fluid: false,
};


export default Container;
