import React from "react"

export const Button = () => {
    const hi = () => {
        console.log("hi")
    }
    return (
        <div className="Button">
            <button onClick={hi}>button</button>
        </div>

    )

}