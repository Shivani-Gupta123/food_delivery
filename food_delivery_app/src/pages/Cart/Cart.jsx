import { useContext } from 'react';
import './Cart.css';

const Cart = () => {

    const{cartItems,food_list,removeFromCart} = useContext(StoreContext)
   
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Cart
