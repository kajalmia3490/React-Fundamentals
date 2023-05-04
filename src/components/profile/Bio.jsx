import React from "react"

const Bio = (props) => (
    <div className="Bio">
        <h2 className="text-2xl font-bold">
            {props.name}
        </h2>
        <h4 className="font-bold ">
            {props.title}
        </h4>
    </div>
)

export default Bio