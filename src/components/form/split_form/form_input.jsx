import React from "react";
import PropTypes from 'prop-types'
import TextInput from "./text_input";

const Form = (props) => (
    <form
        onSubmit={props.submitHandler}>
        <TextInput
            name='name'
            value={props.values.name}
            placeholder='Kajal'
            label="Enter name"
            onChange={props.changeHandler}
        />
        <TextInput
            name='email'
            value={props.values.email}
            placeholder='email@test.com'
            type='email'
            label='Enter email'
            onChange={props.changeHandler}
        />
        <TextInput
            name='password'
            value={props.values.password}
            placeholder='******'
            type='password'
            label='Type Password'
            onChange={props.changeHandler}
        />

        <button
            className="border p-1.5 bg-gray-300 rounded "
            type="submit">
            Submit
        </button>
    </form>
)

Form.propTypes = {
    values: PropTypes.object.isRequired,
    changeHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired
}

export default Form