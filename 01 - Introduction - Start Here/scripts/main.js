var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
})

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <p>Header</p>
      </div>
    )
  }
})

var Order = React.createClass({
  render: function() {
    return (
      <div>
        <p>Order</p>
      </div>
    )
  }
})

var Inventory = React.createClass({
  render: function() {
    return (
      <div>
        <p>Inventory</p>
      </div>
    )
  }
})

var StorePicker = React.createClass({
  render: function() {
    var name = 'Christine'
    return (
      <div>
        <form className='store-selector'>
          {/*Comments*/}
          <h2>Please Enter a Store {name}</h2>
        <input type='text' ref='storeId' required />
          <input type='submit' />
        </form>
      </div>
    )
  }
});

ReactDOM.render(<App/>, document.querySelector('#main'));
