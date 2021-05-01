import React from 'react'
import Logo from '../img/logo.png'

export default function Header() {
    return (
        <>
            <div className="App-header">
                <div className="top-nav">
                    <div className="header">
                        <nav className="d-flex justify-content-between">
                            <div className="logo">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div>
                                <ul className="d-flex navi mt-2">
                                    <li>about us</li>
                                    <li>stories</li>
                                    <li>contact</li>
                                    <li>log in</li>
                                    <li className="sp-link">sign up</li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="bottom-nav">
                    <menu>
                        <ul className="d-flex justify-content-around">
                            <li>marketplace</li>
                            <li>wholesale center</li>
                            <li>seller center</li>
                            <li>services</li>
                            <li>internships</li>
                            <li>events</li>
                        </ul>
                    </menu>
                </div>
            </div>

        </>
    )
}
