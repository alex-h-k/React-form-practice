import React from 'react'
export default function FormChild(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.location}</h2>
        </div>
    )
}