/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Table.css';

const cx = classNames.bind(styles);

const Table = ({ children, ...rest }) => (
  <div
    className={cx({
      root: true,
    })}
    {...rest}
  >
    {children}
  </div>
);

export default Table;
