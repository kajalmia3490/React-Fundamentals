import React from "react";

class UncontrolledForm extends React.Component {
    submitHandler = (event) => {
        event.preventDefault()
        const data = {}
        data.name = event.target.name.value 
        data.email = event.target.email.value 
        data.password = event.target.password.value
        console.log(data)
    }
    render() {
        return (
            <div>
                <h2 className="text-xl">
                    Form sector: Uncontrolled form 
                </h2>

                <form className="block" onSubmit={this.submitHandler}>
                    <input
                    name="name"
                    placeholder="Kajal" 
                    type="text" />

                    <input
                    name="email" 
                    placeholder="example@email.com"
                    type="email" />

                    <input
                    name="password" 
                    placeholder="******"
                    type="password" />

                    <button type="submit">
                        Submit
                    </button>
                </form>
                
            </div>
        )
    }
}

export default UncontrolledForm