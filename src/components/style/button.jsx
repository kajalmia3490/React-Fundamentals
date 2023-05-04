import React from "react";
import classes from './style.module.css';

const Button = (props) => (
    <div>
        <button className={classes.button} {...props}>
            {props.children}
            Click Me 
        </button>
    </div>
)

export default Button