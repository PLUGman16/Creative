import React from "react";
import HeroBG from './img/hero_bg.jpg'
import './hero.css'

export const Hero = () => {
    return (
        <>
            <div className="hero">
                

                <div className="hero__tittle">
                    <h1 className="hero__tittle-tittle">
                        Creatives
                    </h1>
                    <p className="hero__tittle-webAdress">
                        Power by PSDfreebies.com
                    </p>
                </div>

                <div className="hero__scroll">
                    <div className="hero__scroll-name">
                        Scroll Down
                    </div>
                    <div className="hero__scroll-btn">
                        <a href="#scroll" className="hero__scroll-link"></a>
                    </div>
                </div>
            </div>
        </>
    )
}