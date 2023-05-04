import React from "react";

class Inputs extends React.Component {

    // state = {
    //     name: '',
    //     country: '',
    //     bio: '',
    //     birthday: '',
    //     gender: '',
    //     agree: false,
    //     skills: []
    // }
    // changeHandler = (event) => {
    //     // console.log(event.target.name)
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // // checkbox:
    // checkHandler = (event) => {
    //     this.setState({
    //         agree: event.target.checked
    //     })
    // }

    // // another checkbox handler:
    // skillCheckboxHandler = (event) => {
    //     if (event.target.checked) {
    //         this.setState({
    //             skills: [...this.state.skills, event.target.value]
    //         })
    //     } else {
    //         const skills = this.state.skills.filter((skill) =>
    //             skill !== event.target.value
    //         )
    //         this.setState({ skills })
    //     }
    // }

    state = {
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        agree: false,
        skills: []
    }

    changeHandler = (event) => {
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    checkedHandler = (event) => {
        this.setState({
            agree: event.target.checked
        })
    }

    skillCheckboxHandler = (event) => {
        if (event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        } else {
            const skills = this.state.skills.filter(skill =>
                skill !== event.target.value)
            this.setState({ skills })
        }
    }
    render() {
        const { name, country, bio, birthday, agree, skills } = this.state
        // const { name, country, bio, birthday, agree, skills } = this.state
        return (
            <div className="p-5 border border-gray-400 rounded">
                <h1 className="text-2xl text-center">
                    Basic Inputs and Elements
                </h1>

                <div>
                    <input
                        onChange={this.changeHandler}
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name" />

                    <div>
                        <select
                            onChange={this.changeHandler}
                            value={country}
                            name="country">
                            <option value="Select country">Select country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="China">China</option>
                            <option value="India">India</option>
                        </select>
                    </div>

                    <div>
                        <textarea
                            onChange={this.changeHandler}
                            value={bio}
                            name="bio"
                            placeholder="Type yourself"></textarea>
                    </div>

                    <div>
                        <input
                            onChange={this.changeHandler}
                            value={birthday}
                            type="date" />
                    </div>

                    <div>
                        <input
                            onChange={this.changeHandler}
                            type="radio"
                            name="gender"
                            value="Male" /> Male

                        <input
                            onChange={this.changeHandler}
                            type="radio"
                            name="gender"
                            value="Female" /> Female

                        <input
                            onChange={this.changeHandler}
                            type="radio"
                            name="gender"
                            value="Other" /> Other
                    </div>

                    <div>
                        <input
                            onChange={this.checkedHandler}
                            value={agree}
                            type="checkbox" /> I agree to all terms and conditions.
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            onChange={this.skillCheckboxHandler}
                            checked={skills.includes('Javascript')}
                            name="skills"
                            value="Javascript" /> Javascript

                        <input
                            type="checkbox"
                            name="skills"
                            onChange={this.skillCheckboxHandler}
                            checked={skills.includes('Python')}
                            value="Python" /> Python

                        <input
                            onChange={this.skillCheckboxHandler}
                            checked={skills.includes('C')}
                            type="checkbox"
                            name="skills"
                            value="C" /> C
                    </div>

                    <div>
                        <button
                            onClick={() => {
                                console.log(this.state)
                            }}>
                            Submit
                        </button>
                    </div>
                </div>

                {/* <input
                    onChange={this.changeHandler}
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Enter your name" />

                <select
                    onChange={this.changeHandler}
                    name="country"
                    value={country}>
                    <option value="select country">select country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="Srilanka">Srilanka</option>
                </select>

                <textarea
                    onChange={this.changeHandler}
                    value={bio}
                    name="bio">
                </textarea>

                <input
                    onChange={this.changeHandler}
                    value={birthday}
                    type="date" />

                <div>
                    <input
                        onChange={this.changeHandler}
                        type="radio"
                        name="gender"
                        value="Male" /> Male

                    <input
                        onChange={this.changeHandler}
                        type="radio"
                        name="gender"
                        value="Female" /> Female

                    <input
                        onChange={this.changeHandler}
                        name="gender"
                        value="Other"
                        type="radio" /> Other
                </div>

                <div>
                    <input
                        onChange={this.skillCheckboxHandler}
                        name="skills"
                        value="Java"
                        checked={skills.includes('Java')}
                        type="checkbox" /> Java 

                        <input
                        onChange={this.skillCheckboxHandler}
                        name="skills"
                        value="Javascript"
                        checked={skills.includes('Javascript')}
                        type="checkbox" /> Javascript 

                        <input
                        onChange={this.skillCheckboxHandler}
                        name="skills"
                        value="Python"
                        checked={skills.includes('Python')}
                        type="checkbox" /> Python 

                        <input
                        onChange={this.skillCheckboxHandler}
                        name="skills"
                        value="Golang"
                        checked={skills.includes('Golang')}
                        type="checkbox" /> Golang 
                </div>

                <div>
                    <input
                        onChange={this.checkHandler}
                        type="checkbox"
                        name="checkbox"
                        checked={agree}
                    /> I agree to all terms and conditions.
                </div>

                <button
                    onClick={() => {
                        console.log(this.state)
                    }}
                    className="mt-3 p-2 text-white bg-black">
                    Show Data
                </button> */}

            </div>
        )
    }
}

export default Inputs