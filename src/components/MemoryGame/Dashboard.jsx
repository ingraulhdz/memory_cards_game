import React from 'react';
import Card from './Card';
import {style} from '../style/style.js';


const dashboard = ({cards, selecting, selection}) => {

    return (
        <div className='dashboard' style={style.dashboard}>


{cards.map((card,index) => {
    const working = selection.indexOf(card) >-1;

    return( 
    <Card key={index} card={card} selecting={selecting} selection={selection}  working={working} />
);
})}

            
        </div>
    );
};

export default dashboard;