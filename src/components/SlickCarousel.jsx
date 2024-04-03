import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import Slide from './Slide';
import { list } from '../data';
import { FaQuoteRight } from 'react-icons/fa';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className='slick-container'>
      <Slider {...settings}>
        {list.map((person) => {
          return (
            <Slide key={person.id} {...person} FaQuoteRight={FaQuoteRight} />
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
