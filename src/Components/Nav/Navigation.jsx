import React from "react";
import './nav.css'
import Logo from './img/logo.png'
import T from './img/t.png'
import F from './img/f.png'
import S from './img/s.png'
import In from './img/in.png'

export const Nav = () => {
    return (
        <>
            <div className='nav'>
                <div className="nav__logo">
                    <img src={Logo} alt="Упс! Здесь должно было быть Лого" className="nav__logo-img" />
                </div>

                <div className="nav__links">
                    <ul className="nav__links__list">
                        <li className="nav__links__list-item">
                            <a href="#" className="nav__links__list-link">
                                Home
                            </a>
                        </li>
                        <li className="nav__links__list-item">
                            <a href="#" className="nav__links__list-link">
                                Pages
                            </a>
                        </li>
                        <li className="nav__links__list-item">
                            <a href="#" className="nav__links__list-link">
                                Features
                            </a>
                        </li>
                        <li className="nav__links__list-item">
                            <a href="#" className="nav__links__list-link">
                                Extensions
                            </a>
                        </li>
                        <li className="nav__links__list-item">
                            <a href="#" className="nav__links__list-link">
                                Tutorials
                            </a>
                        </li>
                        <li className="nav__links__list-item">
                            <a href="#" className="nav__links__list-link">
                                Conatct Us
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav__socicalLink">
                    <ul className="nav__socialLink-list">
                        <li className="nav__socialLink-item">
                            <a href="#" className="nav__socialLink-item-link">
                                <img src={F} alt="Facebook" className="nav__socialLink-item-link-img" />
                            </a>
                        </li>
                        <li className="nav__socialLink-item">
                            <a href="#" className="nav__socialLink-item-link">
                                <img src={T} alt="Facebook" className="nav__socialLink-item-link-img" />
                            </a>
                        </li>
                        <li className="nav__socialLink-item">
                            <a href="#" className="nav__socialLink-item-link">
                                <img src={S} alt="Facebook" className="nav__socialLink-item-link-img" />
                            </a>
                        </li>
                        <li className="nav__socialLink-item">
                            <a href="#" className="nav__socialLink-item-link">
                                <img src={In} alt="Facebook" className="nav__socialLink-item-link-img" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}