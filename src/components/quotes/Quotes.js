import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotesArray }) {
  const quoteList = quotesArray.map(({ image, characterName, quote }) => (
    <li key={quote}>
      <Quote 
        characterName={characterName}
        image={image}
        quote={quote}
      />
    </li>
  ));

  return (
    <ul>
      {quoteList}
    </ul>
  );
}

Quotes.propTypes = {
  quotesArray: PropTypes.arrayOf(PropTypes.shape({
    characterName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
  })).isRequired
};

export default Quotes;
