import React from "react";
import PhoneImg from './img/phone.png'
import './phone.css'

export const Phone = () => {
    return (
        <>
            <section className="phone">
                <div className="phone__content">
                    <h2 className="phone__content-tittle">
                        Akita Inu Dog
                    </h2>
                    <p className="phone__content-paragraph">
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                        Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.
                    </p>
                    <ul className="phone__content-list">
                        <li className="phone__content-listItem">
                            <p className="phone__content-listParagraph">
                                Fully Responsive Design
                            </p>
                        </li>
                        <li className="phone__content-listItem">
                            <p className="phone__content-listParagraph">
                                High Quality Code
                            </p>
                        </li>
                        <li className="phone__content-listItem">
                            <p className="phone__content-listParagraph">
                                Different Headers & Layout
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="phone__img">
                    <img src={PhoneImg} alt="Упс! Здесь должна была быть картинка!" className="phone__img-img" />
                </div>
            </section>
        </>
    )
}