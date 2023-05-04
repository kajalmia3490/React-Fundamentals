import React from "react";

class ControlledForm extends React.Component {
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
        const { name, email, password } = this.state
        return (
            <div>
                <h3>
                    Controlled form
                </h3>
                <form
                    onSubmit={this.submitHandler}>
                    <input
                        onChange={this.changeHandler}
                        name="name"
                        value={name} 
                        placeholder='Alexa'
                        type="text" />

                    <input
                        onChange={this.changeHandler}
                        name="email"
                        value={email}
                        placeholder='hello@test.com'
                        type="text" />

                    <input
                        onChange={this.changeHandler}
                        name="password"
                        value={password}
                        placeholder='******'
                        type="text" />

                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default ControlledForm