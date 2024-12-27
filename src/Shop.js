import React from 'react'
import HeroSection from './components/HeroSection/HeroSection';
import NewArrival from './components/Sections/NewArrival';
import Category from './components/Sections/Categories/Category';
import content from './data/content.json';
import Footer from './components/Footer/Footer';

const Shop = () => {
  return (
    <>
      <HeroSection />
      <NewArrival />
      {content.categories && content?.categories?.map((item, index) => <Category key={item?.title + index} {...item} />)}
      <Footer content={content?.footer} />
    </>
  )
}

export default Shop;