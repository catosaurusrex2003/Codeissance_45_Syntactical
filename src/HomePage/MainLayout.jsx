import React from 'react'
import Card from './Card'
import "./Homepage_css.css"


export default function MainLayout() {

    let images_link = ["./ML_pic1.jpg","./ML_pic2.svg","./ML_pic3.svg","./ML_pic4.svg"]

    return (
        <div className='Main-Main'>
            <a href= '/course' style={{textDecoration : 'none', color : 'black'}} >
                <div class="g-col-6 "     ><Card  img_src = {images_link[0]}/></div>
                </a>
            <a href= '/course' style={{textDecoration : 'none', color : 'black'}}>
            <div class="g-col-6 "     ><Card  img_src = {images_link[1]}/></div>
                </a>
            <a href= '/course' style={{textDecoration : 'none', color : 'black'}}>
            <div class="g-col-6 "     ><Card  img_src = {images_link[3]}/></div>
                </a>
            <a href= '/course' style={{textDecoration : 'none', color : 'black'}}>
            <div class="g-col-6 "     ><Card  img_src = {images_link[2]}/></div>
                </a>
        </div>
    )
}