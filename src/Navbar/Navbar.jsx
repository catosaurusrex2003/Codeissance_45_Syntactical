import React from "react"
import "./navbar_css.css"

// shakti_logo_navbar
// C:\Users\mohammed mehdi\OneDrive\Desktop\Codeissance_45_Syntactical\public\shakti_logo_navbar.png
// C:\Users\mohammed mehdi\OneDrive\Desktop\Codeissance_45_Syntactical\public\shakti_logo_dark_2.ico

// "C:\Users\mohammed mehdi\OneDrive\Desktop\Codeissance_45_Syntactical\public\icons8-female-profile-96.png"

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href=""><img height="60"  src = {require("./unknown.png")}  /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href = '/chat'>Chat</a>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul>
                        <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img height = {40} className = "profile_logo" src =  {require("./icons8-female-profile-96.png")} />
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Log Out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}