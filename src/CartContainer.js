import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2 className='bag-header'>cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2 className='bag-header'>cart</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4 className='total-header'>
            total <span className='total-span'>€{total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
