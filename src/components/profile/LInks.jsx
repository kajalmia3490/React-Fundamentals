import React from "react"

const Links = (props) => (
    <div className="links mt-5">
        <h2 className="font-bold text-xl">
            Social Links:
        </h2>
        <ul className="flex gap-14 mt-2">
            <li className="underline">
                <a href="#">
                    {props.link1}
                </a>
            </li>
            <li className="underline">
                <a href="#">
                    {props.link2}
                </a>
            </li>
            <li className="underline">
                <a href="#">
                    {props.link3}
                </a>
            </li>
        </ul>
    </div>
)

export default Links