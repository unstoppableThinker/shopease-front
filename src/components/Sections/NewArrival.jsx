import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading';
import Card from '../Card/Card';
import Jeans from '../../assets/img/jeans.jpg';
import Shirts from '../../assets/img/shirts.jpg';
import Tshirts from '../../assets/img/tshirts.jpg';
import Dresses from '../../assets/img/dresses.jpg';
import Carousel from 'react-multi-carousel';
import { responsive } from '../../utils/Section.constants';

const items = [{
  'title': 'Jeans',
  'imagePath': Jeans
},
{
  'title': 'Shirts',
  'imagePath': Shirts
},
{
  'title': 'T-Shirts',
  'imagePath': Tshirts
},{
  'title': 'Dresses',
  'imagePath': Dresses
}];

const NewArrival = () => {
  return (
    <>
			<SectionHeading title={'New Arrivals'} />
			<Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}>
        {items && items?.map((item, index) => <Card key={item.title + index} title={item.title} imagePath={item.imagePath} />)}
      </Carousel>
    </>
  )
}

export default NewArrival;
