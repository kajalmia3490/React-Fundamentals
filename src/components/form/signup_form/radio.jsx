import React from "react";
import PropTypes from 'prop-types';

const Radio = props => (
    <div>
        <input 
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.changeHandler}
         />
         <label htmlFor={props.name}>
            {props.label}
         </label>
    </div>
)

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired 
}

Radio.defaultProps = {
    type: 'radio'
}

export default Radio