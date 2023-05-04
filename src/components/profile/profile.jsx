import React, { Component } from "react";

// bio file import:
import Bio from "./Bio";

// skills file import:
import Skills from "./Skills";

// links file import:
import Links from "./LInks"



export class Profile extends Component {

    data = {
        name: 'Kajal Mia',
        title: 'Front end developer, Javascript',
        skillA: 'C',
        skillB: 'Python',
        skillC: 'Javascript',
        link1: 'WhatsApp',
        link2: 'Email',
        link3: 'Messenger'
    }
    render() {
        return (
            <div className="container mt-5 border border-gray-400 p-10 rounded ">

                <Bio name={this.data.name} title={this.data.title} />
                <Skills
                    skillA={this.data.skillA}
                    skillB={this.data.skillB}
                    skillC={this.data.skillC} />
                <Links
                    link1={this.data.link1}
                    link2={this.data.link2}
                    link3='Twitter'
                />
            </div>


        )
    }
}