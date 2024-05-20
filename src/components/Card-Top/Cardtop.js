import React from 'react';
import './Cardtop.css'
function Cardtop({ num, image, subscriber, social, follower, color, colorUp, down }) {
  const Cardborder = { borderColor: color }
  const UpDown = { color: colorUp }

  return (
    <section className='card-top' style={Cardborder}>
      <div className='top'>
        <img src={image} alt={image} />
        <h4> {social} </h4>
      </div>
      <div className='rodape-top'>
        <h4>{num}</h4>
        <h5>{follower}</h5>
        <h6 style={UpDown}>{down}{subscriber}</h6>
      </div>
    </section>
  )
};

export default Cardtop;