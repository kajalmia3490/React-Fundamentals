// import React, {Component} from "react";

// class Child extends Component {
//     render() {
//         this.props.func(this)
//         return (
//             <strong>I am the Child component</strong>
//         )
//     }
// }

// class App2 extends Component {
//     getCont(context) {
//         console.log(context)
//     }
//     render() {
//         this.getCont(this)
//         return (
//             <div>
//                 <h2>pass the function as props</h2>
//                 <Child func={this.getCont} />
//             </div>
//         )
//     }
// }

// export default App2


// 
import React, { Component } from "react";

// class NewChild extends Component {
//     render() {
//         return (
//             <div>
//                 <strong>I am your child Component</strong>
//             </div>
//         )
//     }
// }

// render props:
const ChildComponent = props => {
    <div>
        <strong>I am child component here</strong>
        <p>I don't know what to do </p>
        {props.children}
    </div>
}

class NewApp extends Component {
    getContent(content) {
        console.log(content)
    }
    render() {
        // this.getContent(this)
        return (
            <div>
                <h2>Now you Pass a function as props </h2>
                {/* <NewChild func={this.getContent} /> */}
                <p>Do you ready to compile?</p>
                <ChildComponent>
                    <h2>I am from Child component</h2>
                </ChildComponent>
            </div>
        )
    }
}

export default NewApp