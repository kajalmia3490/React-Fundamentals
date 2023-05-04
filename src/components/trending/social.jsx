import React from "react";

// trial props import here:
import Trial from "../props/trial-props";

const Social = () => (
    <div className="p-5">
        <h2 className="text-xl font-bold">
            Social Media
        </h2>
        <ul className="flex mt-3 gap-10">
            <li className="p-2 bg-gray-300 rounded">
                <a href="#">Facebook </a>
            </li>
            <li className="p-2 bg-gray-300 rounded">
                <a href="#">YouTube </a>
            </li>
            <li className="p-2 bg-gray-300 rounded">
                <a href="#">Twitter </a>
            </li>
            <li className="p-2 bg-gray-300 rounded">
                <a href="#"><Trial name='TikTok' /> </a>
            </li>
        </ul>
    </div>
)

export default Social