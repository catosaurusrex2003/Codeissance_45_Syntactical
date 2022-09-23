import React from 'react'
import "./Homepage_css.css"



export default function RightPanel() {
    return (
    <div className='RightPanel-Main sticky'>
        <div className="card" style={{marginLeft: "auto", width: "18rem"}}>
        <img src= {require("./ML_pic1.jpg")} className="card-img-top" alt="..." />
        <div className="card-body1">
            <h5 className="card-title">Your Course</h5>
            <p className="card-text">How to win a Hackathon</p>
            <a href="/course" className="btn btn-primary">Continue</a>
        </div>
        </div>
    </div>
    )
}