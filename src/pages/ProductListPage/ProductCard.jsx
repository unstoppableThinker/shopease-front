import React from 'react'
import SvgFavourite from '../../components/common/SvgFavourite';

const ProductCard = ({ title, description, price, discount, rating, brand, thumbnail }) => {
  return (
    <div className='flex flex-col hover:scale-105 relative'>
      <img className={`h-[320px] w-[280px]
        border rounded-lg cursor-pointer object-cover block`} src={thumbnail} alt={title}/>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className='text-[16px] p-1'>{title}</p>
          {description && <p className='text-[12px] px-1 text-gray-600'>{brand}</p>}
        </div>
        <div>
        <p>${price}</p>
        </div>
      </div>
      <button onClick={()=> console.log("Click button")} className='absolute top-0 right-0 pt-4 pr-4 cursor-pointer'><SvgFavourite /></button>
    </div>
  )
}

export default ProductCard