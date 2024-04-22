import React, { useState } from 'react'
import './App.css'
import Nav from './componants/Nav'
import Product from './componants/Product'
import Page from './componants/Page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  // Cart state
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // ตรวจสอบว่าสินค้าที่เพิ่มมีอยู่ในตะกร้าหรือไม่
      const existingProduct = prevCart.find(item => item.id === product.id);
      
      if (existingProduct) {
          // หากสินค้านั้นมีอยู่แล้ว ให้เพิ่ม quantity ของสินค้านั้น
          return prevCart.map(item => 
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
      } else {
          // หากสินค้านั้นไม่มีในตะกร้า ให้เพิ่มสินค้านั้นพร้อมตั้งค่า quantity เป็น 1
          return [...prevCart, { ...product, quantity: 1 }];
      }
  });
  };


  // Function to adjust the quantity of a product in the cart
  const adjustQuantity = (productId, newQuantity) => {
      setCart((prevCart) => {
          return prevCart.map((product) =>
              product.id === productId ? { ...product, quantity: newQuantity } : product
          )
          .filter((product) => product.quantity > 0);
      });
  };

  const totalPrice = (cart) => {
    return cart.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  }

  return (
      <>
          <Router>
              <Nav
                  cart={cart}
                  adjustQuantity={adjustQuantity}
                  totalPrice={totalPrice}
              />
              <Routes>
                  <Route path='/' element={<Page />} />
                  <Route path='/product/:id' element={<Product addToCart={addToCart} />} />
              </Routes>
          </Router>
      </>
  );
}

export default App
