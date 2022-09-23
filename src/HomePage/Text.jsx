import React from 'react'

export default function Text (props) {
    return (
        <h4 id = {props.id} onClick={props.clickThis} > Page {props.No} </h4>
    )
}