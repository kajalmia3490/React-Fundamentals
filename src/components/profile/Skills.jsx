import React from "react"

const Skills = (props) => (
    <div className="skills">
        <h2 className="text-xl mt-4 font-bold">
            Skills:
        </h2>
        <ul className="flex gap-10 mt-2">
            <li className="bg-gray-300 rounded p-2">
                {props.skillA}
            </li>
            <li className="bg-gray-300 rounded p-2">
                {props.skillB}
            </li>
            <li className="bg-gray-300 rounded p-2">
                {props.skillC}
            </li>
        </ul>
    </div>
)

export default Skills