import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, downvoteQuote, upvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <QuoteCard removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect()(Quotes);
