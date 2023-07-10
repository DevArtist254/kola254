import React from 'react'
import intro1 from '../../assests/images/hair-2.jpg'
import x from '../../assests/images/x.png'

function CartNav() {
  return (
    <div>
         <div className="dropdown">
            <h2 className="dropdown__header">Shop</h2>
              <div
                className="dropdown__tours"
                // onClick={() => navTours(cartItem)}
              >
                <div className="dropdown__tours--placeHolder "></div>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${intro1})`,
                  }}
                  className="dropdown__tours--img"
                ></div>
                <div className="dropdown__tours--content">
                  <h4 className="dropdown__tours--header">Wig hair</h4>
                  <p className="dropdown__tours--total">
                    Pcs: 1
                  </p>
                  <p className="dropdown__tours--total">$24</p>
                </div>
                <img src={x} alt="cancel" className="dropdown__tours--cancel" />
              </div>

            <p className="dropdown__p">Total : 247</p>
            <div
              className="dropdown__cta"
              // onClick={() => navRoute('/checkout')}
            >
              Pay
            </div>
          </div>
    </div>
  )
}

export default CartNav