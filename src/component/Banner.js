import React from "react";
const { REACT_APP_TITLE } = process.env;

export const Banner = props => (
    <h4 className="bg-primary text-white text-center p-4">
        {REACT_APP_TITLE}
    </h4>
)
