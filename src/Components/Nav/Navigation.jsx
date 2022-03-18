import React, { useRef, useState } from "react";
import './nav.css'
import Logo from './img/logo.png'
import T from './img/t.png'
import F from './img/f.png'
import S from './img/s.png'
import In from './img/in.png'

export const Nav = () => {
    let [position, setPosition] = useState({
    })
    const ten = {top: '-400px'}, hundred = {top: '0px'}
    const Open = () => {
        navBtn.current = !navBtn.current
        if(navBtn.current == true) {
            setPosition({...position, ...ten})
        } else {
            setPosition({...position, ...hundred})
        }
    }
    const navBtn = useRef(false)
    
    return (
        <>
            <div className='nav'>
                <input id="navChecbox" ref={navBtn} type="checkbox" className="nav__btn"/>
                <label onClick={Open} htmlFor='navChecbox' className="nav__labelBtn">
                    <span></span>
                </label>
                <div className="nav__logo">
                    <img src={Logo} alt="Упс! Здесь должно было быть Лого" className="nav__logo-img" />
                </div>

                <div style={position} className="nav__navbar">
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
            </div>
        </>
    )
}