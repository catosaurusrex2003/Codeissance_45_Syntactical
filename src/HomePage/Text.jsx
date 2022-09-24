import React from 'react'

export default function Text (props) {
    const topicstyle ={
        backgroundColor : 'rgb(211 211 211)',
        padding : '2rem',
    }
    return (
        <div className="topicname" style={topicstyle}>
        <a href="#{props.No}" style ={{textDecoration : 'none', color : 'black'}}>
        <h4 id = {props.id} onClick={props.clickThis}> Topic {props.No} </h4>
            </a>  
        </div>
    )
}