import React from 'react';
import PropTypes from 'prop-types';

function Quote({ characterName, image, quote }) {
  return (
    <section>
      <h3>{characterName}</h3>
      <img src={image} alt={characterName} />
      <p>{quote}</p>
    </section>
  );
}

Quote.propTypes = {
  characterName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default Quote;
