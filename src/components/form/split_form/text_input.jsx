import React from "react"
import PropTypes from 'prop-types'

const TextInput = props => (
    <div>
        <label htmlFor={props.name}>{props.label}</label>
        <input
            className="border ms-2 mt-2"
            onChange={props.onChange}
            name={props.name}
            id={props.name}
            value={props.value}
            placeholder={props.placeholder}
            type={props.type} />
    </div>
)

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextInput.defaultProps = {
    type: 'text',
    label: ''
}

export default TextInput