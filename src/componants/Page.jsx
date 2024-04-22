import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import menpng from '../assets/men.png'
import womenpng from '../assets/women.png'
import jewpng from '../assets/jew.png'
import gadgetpng from '../assets/gadget.png'

function page() {

  const [jewelery, setJewelery] = useState([]);
  const [menCloth, setMenCloth] = useState([]);
  const [womenCloth, setWomenCloth] = useState([]);
  const [gadget, setGatget] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(res => res.json())
      .then(json => {
        setJewelery(json);
      }).catch(error => {
        console.error('Error fetching data', error)
      })
  }, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(res => res.json())
      .then(json => {
        setMenCloth(json);
      }).catch(error => {
        console.error('Error fetching data', error)
      })
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(res => res.json())
      .then(json => {
        setWomanCloth(json);
      }).catch(error => {
        console.error('Error fetching data', error)
      })
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(res => res.json())
      .then(json => {
        setWomenCloth(json);
      }).catch(error => {
        console.error('Error fetching data', error)
      })
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then(res => res.json())
      .then(json => {
        setGatget(json);
      }).catch(error => {
        console.error('Error fetching data', error)
      })
  }, []);


  return (
    <>
      <div className='bg-slate-50'>
        <div className='grid grid-cols-4 grid-rows-3 max-h-[600px] max-w-[1200px] mx-auto gap-2 p-5'>
          <img className='col-span-3 row-span-3 size-full' src={womenpng} />
          <img className='size-full' src={menpng} />
          <img className='size-full' src={jewpng} />
          <img className='size-full' src={gadgetpng} />
        </div>
        <div className="max-w-[1200px] mx-auto flex flex-col">
          <div className='my-5'>
            <p className='md:text-3xl text-xl font-bold p-5'>Jewelry</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 p-5'>
              {jewelery.map(jewelery => (
                <Link key={jewelery.id} to={`/product/${jewelery.id}`}>
                  <div className='h-full w-full bg-white shadow-xl justify-self-center self-center grid md:grid-rows-3 grid-rows-2 hover:scale-105 ease-out duration-200 text-left'>
                    <div className='flex justify-center items-center md:row-span-2 row-span-1 md:aspect-[11/12] aspect-[4/3]'>
                      <img className='object-contain w-8/12  aspect-square' src={jewelery.image} alt={jewelery.title} />
                    </div>
                    <div className='flex flex-col justify-center p-5'>
                      <h3 className='sm:text-xl text-sm font-semibold line-clamp-1'>{jewelery.title}</h3>
                      <p className='sm:text-lg text-xs'>Price: ${jewelery.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className='my-5'>
            <p className='md:text-3xl text-xl font-bold p-5'>Electronic</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 p-5'>
              {womenCloth.map(womenCloth => (
                <Link key={womenCloth.id} to={`/product/${womenCloth.id}`}>
                  <div className='h-full w-full bg-white shadow-xl justify-self-center self-center grid md:grid-rows-3 grid-rows-2 hover:scale-105 ease-out duration-200 text-left'>
                    <div className='flex justify-center items-center md:row-span-2 row-span-1 md:aspect-[11/12] aspect-[4/3]'>
                      <img className='object-contain w-8/12  aspect-square' src={womenCloth.image} alt={womenCloth.title} />
                    </div>
                    <div className='flex flex-col justify-center p-5'>
                      <h3 className='sm:text-xl text-sm font-semibold line-clamp-1'>{womenCloth.title}</h3>
                      <p className='sm:text-lg text-xs'>Price: ${womenCloth.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className='my-5'>
            <p className='md:text-3xl text-xl font-bold p-5'>Men</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 p-5'>
              {menCloth.map(menCloth => (
                <Link key={menCloth.id} to={`/product/${menCloth.id}`}>
                  <div className='h-full w-full bg-white shadow-xl justify-self-center self-center grid md:grid-rows-3 grid-rows-2 hover:scale-105 ease-out duration-200 text-left'>
                    <div className='flex justify-center items-center md:row-span-2 row-span-1 md:aspect-[11/12] aspect-[4/3]'>
                      <img className='object-contain w-8/12  aspect-square' src={menCloth.image} alt={menCloth.title} />
                    </div>
                    <div className='flex flex-col justify-center p-5'>
                      <h3 className='sm:text-xl text-sm font-semibold line-clamp-1'>{menCloth.title}</h3>
                      <p className='sm:text-lg text-xs'>Price: ${menCloth.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className='my-5'>
            <p className='md:text-3xl text-xl font-bold p-5'>Jewelry</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 p-5'>
              {gadget.map(gadget => (
                <Link key={gadget.id} to={`/product/${gadget.id}`}>
                  <div className='h-full w-full bg-white shadow-xl justify-self-center self-center grid md:grid-rows-3 grid-rows-2 hover:scale-105 ease-out duration-200 text-left'>
                    <div className='flex justify-center items-center md:row-span-2 row-span-1 md:aspect-[11/12] aspect-[4/3]'>
                      <img className='object-contain w-8/12  aspect-square' src={gadget.image} alt={gadget.title} />
                    </div>
                    <div className='flex flex-col justify-center p-5'>
                      <h3 className='sm:text-xl text-sm font-semibold line-clamp-1'>{gadget.title}</h3>
                      <p className='sm:text-lg text-xs'>Price: ${gadget.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page