import React from "react"
import "./LoginPage.css"

export default function LoginPage() {
    return (
        <div className="login">

        <form className = "outer_login" action ="/home" >
            <p className="loginpage_title" >Login</p>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" style = {{color : 'azure'}}/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" style = {{background : 'transparent', border : '0px', color : 'azure'}}/>
                </div>
            </div>
            <button type="submit" class="btn btn-secondary"  >Login</button>
        </form>
        </div>
    )
}