import React, { Component } from "react";
import Button from "./button";
import Button1 from "./button1";
import Button2 from "./button2";


const pStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
}

const headding3 = {
    fontWeight: 'bold'
}

class Style extends Component {
    render() {
        return (
            <div className="border border-gray-300 rounded w-full p-5">
                <h1 className="font-bold text-2xl text-center">
                    How to style react apps
                </h1>

                {/* How to apply style in react application */}
                <p style={pStyle}>Inline css:</p>
                <p style={
                    {
                        fontSize: '16px',
                        color: 'gray',
                        backgroundColor: 'black',
                        padding: '10px',
                        borderRadius: '5px',
                        marginTop: '15px'
                    }
                }>
                    In CSS, the style property is used to specify the styling of an element. It allows you to set a variety of style-related properties, such as font size, color, background color, padding, margin, border, and more. The style property can be applied to any HTML element, including text, images, and form elements.
                </p>

                <p style={
                    {
                        color: 'red',
                        marginTop: '10px',
                        fontWeight: 'bold'
                    }
                }>
                    Hello, Style!
                </p>

                {/* css class */}
                <h3 style={headding3}>
                    CSS class:
                </h3>
                <p>
                    This is your first click here. 
                </p>

                {/* button */}
                <Button />

                {/* button1 */}
                <Button1 />

                {/* button2 */}
                <Button2 />
            </div>
        )
    }
}

export default Style