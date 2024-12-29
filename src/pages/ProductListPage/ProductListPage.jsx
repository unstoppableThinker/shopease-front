import React, { useMemo } from 'react'
import FilterIcon from '../../components/common/FilterIcon';
import content from '../../data/content.json';
import Categories from '../../components/Filters/Categories';
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';
import SizeFilter from '../../components/Filters/SizeFilter';
import ProductCard from './ProductCard';

const categories = content?.categories;

const ProductListPage = ({categoryType}) => {

	const categoryContent = useMemo(() => {
		return categories?.find((category) => category.code === categoryType);
	}, [categoryType]);

	const productListItems = useMemo(() => {
		return content?.products?.filter((product) => product?.category_id === categoryContent?.id);
	}, [categoryContent]);

  return (
    <div>
			<div className="flex">
				<div className='w-[20%] p-[20px] border rounded-lg m-[20px]'>
					<div className="flex justify-between">
						<p className='text-[16px] text-gray-600'>Filter</p>
						<FilterIcon />
					</div>
					<hr className='mt-5'></hr>
					<div>
						<p className='text-[16px] text-black mt-5'>Categories</p>
						<Categories types={categoryContent?.types} />
						<hr className='mt-5'></hr>
					</div>
					<div>
						<PriceFilter />
						<hr className='mt-5'></hr>
						<ColorsFilter colors={categoryContent?.meta_data?.colors} />
						<hr className='mt-5'></hr>
						<SizeFilter sizes={categoryContent?.meta_data?.sizes} />
					</div>
				</div>

				<div className='p-[15px]'>
					<p className='text-black text-lg'>{categoryContent?.description}</p>
					<div className='pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2'>
						{productListItems?.map((item,index)=>(
							<ProductCard key={item?.id+"_"+index} {...item} title={item?.name}/>
						))}
					</div>
				</div>
			</div>
    </div>
  )
}

export default ProductListPage;