import React from 'react'
import "./Homepage_css.css"



export default function RightPanel() {
    return (
        <div className='RightPanel-Main sticky'>
            <div className="card" style={{ marginLeft: "auto", width: "18rem" }}>
                <img src={require("./pic2.jpg")} className="card-img-top link pop-on-hover" alt="..." style={{ height: '18vh' }} />
                <div className="card-body1" style={{ padding: '5%' }}>
                    <h7 className="card-title">Your Course:</h7> <br />
                    <h10 className="card-text" >How to win a Hackathon</h10>
                        <a href="/course" className="btn btn" >
                            <img src={require("./arrow.png")} style ={{height : '0.8rem'}}alt="Continue" />
                        </a>
                    </div>
                </div>
            </div>
    )
}