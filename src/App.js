import React, { Component } from 'react';
import QuoteForm from './containers/QuoteForm'
import Quotes from './containers/Quotes'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        {
          <div>
            <QuoteForm />
            <Quotes />
          </div>
          /*
          TODO:

          Render QuoteForm and Quotes Components
         */}
      </div>
    );
  }
}

export default App;
