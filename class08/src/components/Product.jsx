import React from 'react'

function Product({imgSrc,title,price}) {
  return (
    <div className='w-[300px] border-2 rounded-xl p-2 m-2 flex-col flex-wrap justify-center items-center'>
        <section className='w-60 h-auto flex justify-center items-center flex-wrap'>
            <img src={imgSrc} alt={title} className='w-full h-full object-cover'/>
        </section>
        <section>
            <h1>{title}</h1>
            <h3>${price}</h3>
        </section>
    </div>
  )
}

export default Product