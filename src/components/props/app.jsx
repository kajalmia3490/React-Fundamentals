// function pass as props:
import React, { Component } from "react";

class Child extends Component {
    render() {
        this.props.func(this)
        return (
            <h2 className="font-bold">I am the Child component</h2>
        )
    }
}

class Apps extends Component {

    getContext(context) {
        console.log(context)
    }

    render() {
        this.getContext(this)
        return (
            <div className="mt-5 p-5 bg-slate-400 rounded">
                <h2 className="text-2xl">Pass function as props</h2>
                <Child func={this.getContext} />
            </div>
        )
    }
}

export default Apps