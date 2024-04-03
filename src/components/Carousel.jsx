import { useState, useEffect } from 'react';
import { shortList, list, longList } from '../data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Slide from './Slide';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const nextPerson = () => {
    setCurrentPerson((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;

      return newIndex;
    });
  };

  const prevPerson = () => {
    setCurrentPerson((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;

      return newIndex;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextPerson();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className='slider-container'>
      {people.map((person, personIndex) => {
        return (
          <Slide
            key={person.id}
            currentPerson={currentPerson}
            personIndex={personIndex}
            {...person}
            FaQuoteRight={FaQuoteRight}
          />
        );
      })}
      <button className='prev' onClick={() => prevPerson(currentPerson)}>
        <FiChevronLeft />
      </button>

      <button className='next' onClick={() => nextPerson(currentPerson)}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
