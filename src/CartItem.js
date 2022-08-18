import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from './context'
const CartItem = ({ id, img, title, price, amount}) => {
  const {removeItem, increaseAmount, decreaseAmount, toggleAmount} = useGlobalContext()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} className='item-img'/>
      <div>
        <h4 className='item-title'>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => removeItem(id)}
        >
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
          <FontAwesomeIcon icon={faAngleUp} className='amount-arrow'/> 
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
          <FontAwesomeIcon icon={faAngleDown} className='amount-arrow'/> 
        </button>
      </div>
    </article>
  )
}

export default CartItem
