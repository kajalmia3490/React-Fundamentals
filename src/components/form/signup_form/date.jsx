import React from "react";
import PropTypes from 'prop-types';

const BirthDate = props => (
    <div>
        <label htmlFor={props.name}>
            {props.label}
        </label>
        <input
            className="border rounded p-1.5 mt-2"
            type={props.type}
            name={props.name}
            onChange={props.changeHandler}
        />
    </div>
)

BirthDate.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

BirthDate.defaultProps = {
    type: 'date',
    label: ''
}

export default BirthDate