import React from 'react';
import { History } from 'react-router';
import helpers from '../helpers.js';

var StorePicker = React.createClass({
  mixins: [History],
  goToStore: function(event) {
    event.preventDefault();
    var storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);
  },
  render: function() {
    return (
      <div>
        <form className='store-selector' onSubmit={this.goToStore}>
          {/*Comments*/}
          <h2>Please Enter a Store</h2>
          <input type='text' ref='storeId' required defaultValue={helpers.getFunName()}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
});

export default StorePicker;
