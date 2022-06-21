import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
      const classes=styles[props.isValid ? 'button' : 'blur'];
return (<button type={props.type} className={classes} onClick={props.onClick}>
        {props.children}
        </button>)

}

export default Button;