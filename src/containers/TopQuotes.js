import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSimpsonsQuotes } from '../services/simpsonsApi';
import Quotes from '../components/quotes/Quotes';

export default class TopQuotes extends Component {
  static propTypes = {
    count: PropTypes.number
  }

  state = {
    quotesArray: [],
    loading: true, 
    error: null
  }

  fetchQuotes = () => {
    return getSimpsonsQuotes(this.props.count)
      .then(quotes => {
        this.setState({ quotesArray: quotes, loading: false, error: null });
      })
      .catch(err => this.setState({ error: err, loading: false }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.count !== this.props.count) {
      this.setState({ loading: true });
      this.fetchQuotes();
    }
  }

  render() {
    const { quotesArray, error, loading } = this.state;

    if(error) return <h1>Unable to retrieve your quotes, try again!</h1>;
    if(loading) return <span>LOADING...<img src='http://bestanimations.com/Cartoons/Simpsons/the-simpsons-animated-gif-5.gif' alt='Simpsons GIF' /></span>;
    
    return (
      <>
        <Quotes quotesArray={quotesArray}/>
      </>
    );
  }
}
