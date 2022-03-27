import React from "react";
import { YMaps, Map } from "react-yandex-maps";


export const BlockMap = () => {
    return (
        <>
            <section className="blockMap">
                <YMaps>
                    <div className="blockMap__wrapper">
                        <Map width='100%' height='332px' defaultState={{ center: [56.023430, 92.859131], zoom: 9 }} />
                    </div>    
                </YMaps>
            </section>
        </>
    )
}