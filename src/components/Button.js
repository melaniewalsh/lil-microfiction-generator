import React from 'react';
//import styles from './Button.css'
import './Button.scss'

const Button = ({onClick, children}) => (
  <button className="button" onClick={onClick}>{children}</button>
);

export default Button;
