import React from "react";
import PropTypes from 'prop-types';
import Checkbox from "./checkbox";
import Radio from './radio';
import TextInput from "./text_input";
import BirthDate from "./date";

const Form = ({ values, handleChange, agreeHandler, submitHandler }) => {
    return (
        <form onSubmit={submitHandler}>
            <TextInput
                name='name'
                value={values.name}
                placeholder='enter your name'
                label='Enter Name'
                onChange={handleChange}
            />
            <TextInput
                className='mt-2 border rounded'
                name='email'
                value={values.email}
                type='email'
                placeholder='enter your email'
                label='Enter Email'
                onChange={handleChange}
            />

            <BirthDate
                name="BithDate"
                label='Date of Birth '
                value={values.birthDate}
                onChange={handleChange}
             />

            <TextInput
                className='mt-2 border rounded'
                name='password'
                type='password'
                value={values.password}
                placeholder='******'
                label='Password'
                onChange={handleChange}
            />

            <Radio
                name='gender'
                value={values.gender}
                label=' Male'
                onChange={handleChange}
             />
             <Radio
                name='gender'
                label=' Female'
                value={values.gender}
                onChange={handleChange}
             />
             <Radio
                name='gender'
                label=' Other'
                value={values.gender}
                onChange={handleChange}
             />

            <Checkbox
                name="checkbox"
                label=" I agree"
                value={values.checkbox}
                onChange={agreeHandler} />

            <button
                type="submit"
                className="
                text-white 
                border rounded 
                bg-teal-500 
                p-1.5 
                mt-3
                ">
                Create user
            </button>
        </form>
    )
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreeHandler: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired 
}

export default Form