import React from 'react'
import HeroImg from '../../assets/img/hero-img.jpg'

const HeroSection = () => {
  return (
    <div className='relative flex items-center bg-cover flex-start bg-center h-svh w-full' style={{backgroundImage : `url(${HeroImg})`}}>
			<div className='absolute top-0 right-0 bottom-0 left-0'></div>
				<main className='px-10 lg:px-24 z-10'>
					<div className='text-left'>
						<h2 className='text-2xl text-orange-400'>T-shirt / Tops</h2>
					</div>
					<p className='mt-3 text-orange-400 sm:mt-5 sm:max-w.xl text-6xl'>
						Summer<br />
						Value Pack
					</p>
					<p className='mt-3 text-orange-400 sm:mt-5 sm:max-w.xl text-2xl'>
						cool / colorful / comfy
					</p>
					<button className='border rounded mt-4 border-orange-400 hover:bg-white hover:text-orange-400 text-white bg-orange-400 w-44 h-12'>
						Shop Now
					</button>
				</main>
			</div>
  )
}

export default HeroSection;
