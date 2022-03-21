import React from "react";
import './blog.css'
import One from './img/one.jpg'
import Two from './img/two.jpg'
import Three from './img/three.jpg'
import Four from './img/four.jpg'
import Pencil from './img/pencil.png'

const state = {
    content: [
        {img: One, 
            tittle: 'Fresh Summer Campaign',
            paragraph: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        
            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.`},
            {img: Two, 
            tittle: 'Fresh Summer Campaign',
            paragraph: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        
            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.`},
            {img: Three, 
            tittle: 'Fresh Summer Campaign',
            paragraph: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        
            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.`},
            {img: Four, 
            tittle: 'Fresh Summer Campaign',
            paragraph: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        
            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.`}
    ],
    subtittle: [
        {
            img: Pencil,
            paragraph: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
    
            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.`
        },
        {
            img: Pencil,
            paragraph: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
    
            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.`
        }
    ]
}

export const Blog = () => {
    return(
        <>
            <section className="blog">
                <div className="blog__tittle">
                    <h2 className="blog__tittle-tittle">
                        Let's blog;
                    </h2>
                    <p className="blog__tittle-subtittle">
                        We love clean design and advanced digital solutions.
                    </p>
                </div>

                <div className="blog__content">
                    {
                        state.content.map((el, index) => {
                            return (
                                <div key={index} className="blog__content__block">
                                    <div className="blog__content-img">
                                        <img src={el.img} alt="Упс! Здесь должна была быть картинка!" />
                                    </div>

                                    <h3 className="blog__content-tittle">
                                        {el.tittle}
                                    </h3>

                                    <p className="blog__content-paragraph">
                                        {el.paragraph}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="blog__subtittle">
                    {
                        state.subtittle.map((el, index) => {
                            return (
                                <div key={index} className="blog__subtittle-block">
                                    <img src={el.img} alt="Упс!" className="blog__subtittle-img" />
                                    <p className="blog__subtittle-paragraph">
                                        {el.paragraph}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}