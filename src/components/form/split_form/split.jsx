import React from "react";
import Form from "./form_input";


class SplitForm extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    // This event can use for multiple handler:
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault()

        console.log(this.state)
        event.target.reset()
        this.setState({
            name: '', email: '', password: ''
        })
    }
    render() {
        // const { name, email, password } = this.state
        return (
            <div className="mt-3">
                <h3 className="text-xl">
                    Split Form
                </h3>
                <Form
                    values={this.state}
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler}
                />
            </div>
        )
    }
}

export default SplitForm 