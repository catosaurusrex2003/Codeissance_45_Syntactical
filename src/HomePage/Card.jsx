import React from 'react'
import "./Homepage_css.css"
import { nanoid } from 'nanoid'

export default function Card(props) {

    console.log(props.img_src)
    let id = nanoid()

    return (
        <div className='Card-Main' id = {id} >
            <div className="card" style={{width: "18rem"}} >
            <img  height = {150}  src={require(`${props.img_src}`)} className="card-img-top link pop-on-hover" alt="..." />
            <div className="card-body" >
                <h5>Learn :</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
    )
}