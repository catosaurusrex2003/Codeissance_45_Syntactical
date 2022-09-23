import React from "react"
import MainLayout from "./MainLayout"
import Footer from "./Footer"
import RightPanel from "./RightPanel"


export default function Home_Master(){

    return(
        <div style={{display : 'inline'}}>
            <MainLayout/>
            <RightPanel/>
            <Footer/>
        </div>
    )
}