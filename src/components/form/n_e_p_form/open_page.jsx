import React from "react";

class Open_page extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        errors: {}
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        if (!this.state.name) {
            alert('Please Provide Your Name')
        } else if (!this.state.email) {
            alert('Please Provide Your Email')
        } else if (!this.state.password) {
            alert('Please Provide Your Password')
        } else {
            console.log(this.state)
        }

        // const { isValid, errors } = this.validate()
        // if (isValid) {
        //     event.target.reset()
        //     this.setState({ name: '', email: '', password: '' })
        // } else {
        //     // console.log(errors)
        //     this.setState({ errors })
        // }
        event.target.reset()
        this.setState({ name: '', email: '', password: '' })

    }

    // validate = () => {
    //     const errors = {}
    //     const { name, email, password } = this.state
    //     if (!name) {
    //         errors.name = 'Please provide your name'
    //     }
    //     if (!email) {
    //         errors.email = 'Please provide your email'
    //     }
    //     if (!password) {
    //         errors.password = 'Please provide your password'
    //     }

    //     return {
    //         errors,
    //         isValid: Object.keys(errors) === 0
    //     }
    // }

    render() {
        const { name, email, password } = this.state
        return (
            <div
                className="m-5">
                <h1
                    className="text-xl font-bold text-black">
                    Open form
                </h1>

                <form
                    className="border p-5"
                    onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <strong>
                                Name
                            </strong>
                            <input
                                className="border rounded p-1.5 my-3"
                                name="name"
                                value={name}
                                placeholder='Enter your name'
                                type="text"
                                onChange={this.handleChange} />
                        </li>

                        <li>
                            <strong>
                                Email
                            </strong>
                            <input
                                name="email"
                                className="border rounded p-1.5 my-3 "
                                value={email}
                                placeholder='Enter your email'
                                type="email"
                                onChange={this.handleChange} />
                        </li>

                        <li>
                            <strong>
                                Password
                            </strong>
                            <input
                                name="password"
                                className="border rounded p-1.5 my-3"
                                value={password}
                                placeholder='Enter your password'
                                type="password"
                                onChange={this.handleChange} />
                        </li>

                        <li>
                            <button
                                className="border p-1.5 rounded bg-pink-400"
                                type="submit">
                                Create User
                            </button>
                        </li>
                    </ul>
                </form>

                
            </div>
        )
    }
}

export default Open_page