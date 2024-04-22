import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import carticon from '../assets/cart-icon.svg'
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'

function Nav({ cart, adjustQuantity, totalPrice }) {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(isCartOpen => !isCartOpen);
  };


  return (
    <>
      <div className='sticky top-0 z-20'>
        <div className='flex justify-between items-center px-10 py-2 bg-slate-50'>
          <Link to={`/`}>
            <p className='text-xl hover:scale-105 ease-in-out duration-300'>Fake Store API</p>
          </Link>
          <div>
            <button
              className='hover:scale-105 ease-out duration-200'
              onClick={toggleCart}>
              <img className='sm:scale-100 scale-50' src={carticon} alt="" />
            </button>
          </div>
        </div>
        {isCartOpen ? (
          <div className='static'>
            <div className='absolute right-0 mt-1 bg-slate-50 lg:w-4/12 md:w-5/12 sm:w-7/12 rounded-b-xl p-3 min-h-[300px] flex flex-col justify-between'>
              <div className=''>
                {cart.map((product) => (
                  <>
                    <div key={product.id} className='grid grid-flow-row items-center justify-between gap-5'>
                      <div className='grid grid-flow-col items-center'>
                        <div className='p-2'>
                          <img className='aspect-square w-[50px]' src={product.image} />
                        </div>
                        <p className='col-span-2 line-clamp-2'>{product.title}</p>
                      </div>
                      <div className='flex flex-row gap-2 col-start-5'>
                        <button onClick={() => adjustQuantity(product.id, product.quantity + 1)}>
                          <img src={plus} />
                        </button>
                        <p>{product.quantity}</p>
                        <button onClick={() => adjustQuantity(product.id, product.quantity - 1)}>
                          <img src={minus} />
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className='flex justify-between items-center'>
                  <p className='font-bold text-lg'>Total price: ${totalPrice(cart).toFixed(2)}</p>
                  <button className='btn btn-success text-white'>
                    Check out
                  </button>
                </div>
            </div>
          </div>
        ) : (
          <div>
          </div>
        )}
      </div>
      
    </>
  )
}

export default Nav