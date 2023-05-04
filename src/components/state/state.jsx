import React, {Component} from "react";

class State extends Component {
    // constructor (props) {
    //     super(props)
    //     this.count = 0
    // }
    // count = 0;
    state = {
        count: 0,
        name: 'Kajal'
    }
    
    render() {
        return (
            <div className="mx-10 my-10">

                <h1 className="text-2xl underline">State section</h1>
                <h2>Count your time now: <strong>{this.state.count}</strong> </h2>

                <button className="mt-2 border border-black p-1 bg-slate-400 rounded border-none" onClick={() => {
                    this.setState({count: this.state.count + 1})
                    console.log('clicked!', this.state.count)
                }} >Add+1</button>

                <h2>Hello, {this.state.name}! </h2>


            </div>
        )
    }
}

export default State;