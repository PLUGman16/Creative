import React from "react";
import './form.css'


export const Form = () => {
    return (
        <>
            <section className="form">
                <div className="form__tittle">
                    <h2 className="form__tittle-tittle">
                        We’d love to hear about your project.
                    </h2>
                </div>

                <div className="form__wrapper">
                    <div className="form__form">
                        <form action="#">
                            <div className="form__form-block">
                                <input type="text" placeholder='Name' className="form__form-area" />
                                <input type="email" placeholder="Email" className="form__form-area" />
                                <input type="tel" placeholder="Phone" className="form__form-area" />
                            </div>
                            <textarea placeholder="Message" className="form__form-textarea" />
                            <br/>
                            <input type="submit" className="form__form-btn" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}