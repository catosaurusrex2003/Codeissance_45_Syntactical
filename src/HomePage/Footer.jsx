import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                        <label className="form-label" for="form5Example21">Email address</label>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>

                    <section className="mb-4">
                        <p>
                            Made by Shukla,Mehdi,Thakkar,Patawar with ❤️
                        </p>
                    </section>

                    <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Shukla</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Github</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Linkedin</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Instagram</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Mehdi</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Github</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Linkedin</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Instagram</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Thakkar</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Github</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Linkedin</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Instagram</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Patawar</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Github</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Linkedin</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Instagram</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="text-center p-3" style={{background: "#000000", opacity: "0.2"}}>
                    © 2022 Copyright:
                    <a className="text-white">Syntactical</a>
                </div>
            </footer>
        </div>
    )
}