import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Cart = ({ cartItems ,setCartItems}) => {
  const [Quantity, setQuantity] = useState({})

  const TotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * (Quantity[item.id] || 1), 0);
  }

  const increQuantity = (items) => {
    setQuantity((lastquty) => ({
      ...lastquty, [items]: (lastquty[items] || 1) + 1,
    }))
  }

  const decreQuantity = (items) => {
    setQuantity((lastquty) => ({
      ...lastquty, [items]: Math.max((lastquty[items] || 0) - 1, 0)
    }))
  }


  
  const remove =(itemid)=>{
  const updatecart= cartItems.filter(item=>item.id !== itemid)
   setCartItems(updatecart)
  }

  return (
    <div className='cartsub'>
      <h1>Cart Page</h1><br /><br />
      {cartItems.length ? (
        <div className='total'>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt={item.aname} />
              <p>{`${item.currency}`} {`${item.price}`}</p>
              <p>{`${item.name}`}</p>
              <button style={{ padding: "0.5%" }} onClick={() => increQuantity(item.id)}>+</button>
              <span >{Quantity[item.id] || 1}</span>
              <button style={{ padding: "0.5%" }} onClick={() => decreQuantity(item.id)}>-</button>
              <button style={{ padding: "0.5%" }} onMouseEnter={(e) => e.target.style.backgroundColor = "red"}
                onMouseLeave={(i) => i.target.style.backgroundColor = "white"}  onClick={()=>remove(item.id)} in button remove >
                Remove</button>
            </div>
          ))}
          <br />
          <p>Total Price: Rs {TotalPrice()}</p>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
      <br />
      <Link to="/">My shopping</Link>
    </div>
  );
};
