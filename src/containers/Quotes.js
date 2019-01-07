import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'


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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.props.quotes.map(q => (
                 <QuoteCard
                   key={q.id}
                   quote={q}
                   removeQuote={() => this.props.removeQuote(q.id)}
                   upvoteQuote={() => this.props.upvoteQuote(q.id)}
                   downvoteQuote={() => this.props.downvoteQuote(q.id)}
                 />
               ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return { quotes: state.quotes }
}

// const mapDispatchToProps = dispatch =>{
//   return {
//     removeQuote: () => dispatch(removeQuote())
//   }
// }

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
