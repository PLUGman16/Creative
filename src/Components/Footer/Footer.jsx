import React from "react";
import FooterImg from './img/footer.png'
import './footer.css'

export const Footer = () => {
    return(
        <>
            <div className="footer">
                <div className="footer__left">
                    <p className="footer__content">
                        © 2016 PSDfreebies.com – All Right Reserved
                    </p>
                </div>

                <div className="footer__right">
                    <img src={FooterImg} alt="" className="footer__content" />
                </div>
            </div>
        </>
    )
}