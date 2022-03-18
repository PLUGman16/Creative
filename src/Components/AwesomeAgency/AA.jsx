import React from "react";
import './aa.css'
import One from './img/one.png'
import Two from './img/two.png'
import Three from './img/three.png'
import Four from './img/four.png'

const state = [
    {
        img: One,
        tittle: 'Feature one',
        text: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.'
    },
    {
        img: Two,
        tittle: 'Feature two',
        text: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.'
    },
    {
        img: Three,
        tittle: 'Feature three',
        text: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.'
    },
    {
        img: Four,
        tittle: 'Feature four',
        text: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.'
    }
]




export const Aa = () => {

    return (
        <>
            <div className="aa">
                <div className="aa__tittle">
                    <h2 className="aa__tittle-tittle">
                        We Are An Awesome Agency
                    </h2>
                </div>

                <div className="aa__list">
                    <ul className="aa__list-list">
                        {
                            state.map((el, index) => {
                                return(
                                    <li key={index} className="aa__list-item">
                                        <div className="aa_list-imgBlock">
                                            <img src={el.img} alt="Упс! Здесь должна была быть картинка" className="aa__list-img"/>
                                        </div>
                        
                                        <h3 className="aa__list-tittle">
                                            {el.tittle}
                                        </h3>
                        
                                        <p className="aa__list-paragraph">
                                            {el.text}
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}