import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

function Product({addToCart}) {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const handleAddToCart = () => {
        addToCart(product);
    };

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
            .catch(error => console.error('Error fetching data', error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>
    }

  return (
    <>
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='grid lg:grid-cols-2 grid-cols-1  w-10/12 max-w-[1200px] min-h-[500px]'>
                <div className='flex items-center justify-center p-5'>
                    <img className='object-contain max-h-[400px]' src={product.image}/>
                </div>
                <div className='p-5 grid grid-rows-3 gap-2'>
                    <div className=''>
                        <p className='uppercase text-2xl font-semibold'>{product.title}</p>
                        <p className='text-2xl font-bold pt-10'>${product.price}</p>
                    </div>
                    <div>
                        <p className='text-lg uppercase'>{product.category}</p>
                        <p className=' text-base'>{product.description}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                        onClick={handleAddToCart} 
                        className='text-2xl text-slate-50 font-semibold bg-black py-4 px-8 rounded-lg'>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        
    </>
  )
}

export default Product