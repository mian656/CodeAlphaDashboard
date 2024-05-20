import React from 'react';
import './Cardbottom.css';

function CardBotton({ name, image, subscriber, follower, colorUp, down }) {
    const UpDown = { color: colorUp }

    return (
        <section className='card-bottom'>
            <div className='topo'>
                <h4> {name} </h4>
                <img src={image} alt={image} />
            </div>
            <div className='rodape-bottom'>
                <h5>{follower}</h5>
                <h6 style={UpDown}>{down}{subscriber}</h6>
            </div>
        </section>
    )
};

export default CardBotton;