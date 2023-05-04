import React from "react";
import PropTypes from 'prop-types'

const Checkbox = props => (
    <div>
        <input
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.agreeHandler}
        />
        <label htmlFor={props.name}>
            {props.label}
        </label>
    </div>
)

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

Checkbox.defaultProps = {
    type: 'checkbox',
    label: ''
}

export default Checkbox