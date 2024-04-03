const Slide = ({
  image,
  name,
  title,
  quote,
  FaQuoteRight,
  personIndex,
  currentPerson,
}) => {
  return (
    <article>
      <img src={image} alt={name} className='person-img' />
      <h5 className='name'>{name}</h5>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='icon' />
    </article>
  );
};
export default Slide;
