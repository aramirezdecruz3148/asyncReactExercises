import React from 'react';
import Quotes from './quotes/Quotes';

export default function App() {
  return (
    <Quotes quotesArray={[{ characterName: 'Frank Grimes', image:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887', quote:'I live in a single room above a bowling alley...and below another bowling alley.' }]}/>
  );
}
