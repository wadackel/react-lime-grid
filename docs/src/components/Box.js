/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Box.css';

const cx = classNames.bind(styles);

const Box = ({
  children,
  depth2,
  depth3,
  lg,
  ...rest
}) => (
  <div
    className={cx({
      root: true,
      depth2,
      depth3,
      lg,
    })}
    {...rest}
  >
    {children}
  </div>
);

export default Box;
