import React from "react"

// functional Component
// Capital letter naming convention

let Pizza = (props) =>{
    console.log("I am coming from App.js",props);
    return(
        // JSX --> Javascript xml
        <div className="pizza">
            <h1>{props.brand.toUpperCase()}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Pizza;