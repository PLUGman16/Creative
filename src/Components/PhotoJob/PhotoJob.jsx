import React from "react";
import './photoJob.css'
import PhotoOne from './img/photojobone.jpg'
import PhotoTwo from './img/photojobtwo.jpg'

const state = [
    {date: 'Jan 4, 2016 | In Culture', tittle: 'Akita Inu Dog', subtittle: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

    Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur`, img: PhotoOne},
    {date: 'Jan 4, 2016 | In Culture', tittle: 'Akita Inu Dog', subtittle: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

    Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur`, img: PhotoTwo}
]

export const PhotoJob = () => {
    return (
        <>
            <section className="photojob">
                {
                    state.map((el, index) => {
                        return(
                            <div className="photojob__block" key={index}>
                                <div className="photojob__block-text">
                                    <p className="photojob__suptittle">
                                        {el.date}
                                    </p>
                                    <h2 className="photojob__tittle">
                                        {el.tittle}
                                    </h2>
                                    <p className="photojob__subtittle">
                                        {el.subtittle}
                                    </p>
                                </div>

                                <div className="photojob__block-img">
                                    <img src={el.img} alt="Упс! Здесь должен был быть текст" />
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}