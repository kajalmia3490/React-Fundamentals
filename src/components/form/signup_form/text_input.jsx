import React from "react";
import PropTypes from 'prop-types';

const TextInput = props => (
    <div>
        <label htmlFor={props.name}>
            {props.label}
        </label>
        <input
            className="border rounded mt-2 ms-2 p-1.5"
            type={props.type}
            name={props.name}
            id={props.name}
            label={props.label}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.handleChange}
        />
    </div>
)

TextInput.propsTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}

export default TextInput