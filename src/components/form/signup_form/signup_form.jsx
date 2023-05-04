import React from "react";
import Form from "./form";


const initValues = {
    name: '',
    email: '',
    password: '',
    gender: '',
    birthDate: ''
}

class Signup extends React.Component {
    state = {
        values: initValues,
        agree: false
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }

    agreeHandler = event => {
        this.setState({
            agree: event.target.checked
        })
    }

    submitHandler = event => {
        event.preventDefault()
        console.log(this.state.values)

        event.target.reset()   
        this.setState({ values: initValues, agree: false })
    }

    render() {
        return (
            <div
                className="mt-5 border border-gray-300 rounded p-5">
                <h1 className="text-xl font-bold">
                    Sign Up Form
                </h1>
                <Form
                    values={this.state.values}
                    agree={this.state.agree}
                    handleChange={this.handleChange}
                    agreeHandler={this.agreeHandler}
                    submitHandler={this.submitHandler} />
            </div>
        )
    }
}

export default Signup