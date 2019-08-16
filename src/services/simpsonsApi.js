export const getSimpsonsQuotes = (count = 10) => {
  return fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`)
    .then(res => {
      if(!res.ok) throw 'Unable to retrieve your quotes, try again!';

      return res.json();
    })
    .then(quotes => {
      return quotes.map(quote => ({
        quote: quote.quote,
        image: quote.image,
        characterName: quote.character
      }));
    });
};
