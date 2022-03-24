import React from "react";
import './team.css'
import John from './img/john.jpg'
import Sansa from './img/sansa.jpg'
import Smith from './img/smith.jpg'
import Lady from './img/lady.jpg'

const state = [
    {img: John,
    name: 'JOHN SNOW',
    position: 'CEO'},
    {img: Sansa,
    name: 'LADY SANSA',
    position: 'WebDesigner'},
    {img: Smith,
    name: 'DAVID SMITH',
    position: 'Photographer'},
    {img: Lady,
    name: 'LADY SANSA',
    position: 'WebDesigner'}
]

export const Team = () => {
    return (
        <>
            <section className="team">
                <div className="team__tittle">
                    <h2 className="team__tittle-tittle">
                        Our team
                    </h2>
                    <p className="team__tittle-subtittle">
                        sales long tail influencer pitch release niche market.
                    </p>
                </div>

                <div className="team__content">
                    <ul className="team__list">
                        {
                            state.map((el, index) => {
                                return(
                                        <li key={index} className="team__list-item">
                                            <div className="team__list-img">
                                                <img src={el.img} alt="Упс! Здесь должно было быть фото" />
                                            </div>
                                            <div className="team__list-info">
                                                <h2 className="team__list-ingoName">
                                                    {el.name}
                                                </h2>
                                                <h5 className="team__list-infoPosition">
                                                    {el.position}
                                                </h5>
                                            </div>
                                        </li>
                                    
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}