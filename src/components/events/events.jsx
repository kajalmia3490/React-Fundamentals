import React, { Component } from "react";
import classes from '../style/style.module.css'

class Events extends Component {

    // event check:
    eventHandler = (event) => {
        alert('You clicked here!')
        // console.log(event.target)
    }

    changeHandler = (event1) => {
        // console.log(event1.target.value)
        this.setState({ name: event1.target.value })
    }

    state = {
        name: ''
    }

    // event handler:
    focusHandler = () => {
        console.log('I am focus event')
    }

    blurHandler = () => {
        if (!this.state.name) {
            alert("Please enter your name")
        }
        console.log('I am blur event')
    }

    render() {
        return (
            <div >
                <div className="p-5 border border-gray-400 rounded">
                    <h1 className="mt-10 text-center text-2xl">
                        Events handling
                    </h1>
                    <h2>
                        {/* button */}
                        <button
                            onClick={this.eventHandler}
                            className={classes.button}>
                            event
                        </button>

                        {/* input field */}
                        <input
                            onChange={this.changeHandler}
                            onBlur={this.blurHandler}
                            onFocus={this.focusHandler}
                            className={classes.textField}
                            type="text"
                            value={this.state.name}
                            placeholder="Enter you name"
                            required />
                    </h2>
                    {/* output text field */}
                    {
                        this.state.name &&
                        <p>
                            Welcome, {this.state.name}
                        </p>
                    }

                </div>
            </div>
        )
    }
}

export default Events