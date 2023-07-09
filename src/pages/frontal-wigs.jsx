import React from 'react'
import intro1 from "../assests/images/hair-2.jpg"
import Stars from '../components/card-comp/stars.comp';

function addToCart(e) {
  console.log(`Yes`);
}

function FrontalWigs() {
  return (
    <div className='main'>
    <div className='content'>
      <h1 className='dark head-main'>Frontal Wigs</h1>
      <div className='cards'>
      <div className="card-full">
      <div
        className="card-full__picture"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${intro1})`,
        }}
      >
        <h3
          className="card-full__header card-heading"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${intro1})`,
          }}
        >
          Hair wig
        </h3>
        <div className="card-full__picture--sub-header">
          <p className="card-price"> Only $247</p>
          <h4 className="card-full__subHeader card-subHeader">Wig hair</h4>
          <div className="stars">
            <Stars />
          </div>
        </div>
      </div>
      <div className="card-full__link">
        <p className="nav-link" >
          Details
        </p>
        <p className="card-addToCart-btn">
          Add to cart
        </p>
      </div>
    </div>
      </div>
    </div>
    </div>
  )
}

export default FrontalWigs