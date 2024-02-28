import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import jsonData from "./Components/product.json"
import "./Components/Style.css";
import { Navbar } from './Components/Navbar';
import { Top } from './Components/Top';
import { Cart } from './Components/Cart';

function App() {
  const [items, setItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      setTimeout(() => {
        if (Array.isArray(jsonData?.data)) {
          setItems(jsonData.data);
        } else {
          throw new Error("Data format is incorrect");
        }
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const filterProducts = () => {
    return items.filter((product) => (
      (!selectedSize || product.size.toLowerCase() === selectedSize.toLowerCase()) &&
      (!selectedCategory || product.cattagery.toLowerCase() === selectedCategory.toLowerCase())
    ))
  };

  const addtocart = (product) => {
    const isproductcart=cartItems.some(item=>item.id===product.id)
    if(isproductcart){
      alert("Product Already in your cart")
    }
    else{
    setCartItems([...cartItems, product])
    } 
  };

  return (
    <div>
    <Router>
      <div className="App">
        <Routes> 
          <Route
            path="/"
            element={ 
              <div>
                <Top cartItemsCount={cartItems.length} />
                <div className='view'>
                  <Navbar
                    onSelectSize={(size) => setSelectedSize(size)}
                    onSelectCategory={(category) => setSelectedCategory(category)}
                  />
                  <div className='content'>
                    {filterProducts().map((product) => (
                      <div key={product.id}>
                        <img src={product.img} alt={product.aname} />
                        <p>{`${product.currency}`} {`${product.price}`}</p>
                        <p>{`${product.name}`}</p>
                        <button onClick={() => addtocart(product)}>Add to cart</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/Cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </div>
      
    </Router>
    
    </div>
  );
}

export default App;
