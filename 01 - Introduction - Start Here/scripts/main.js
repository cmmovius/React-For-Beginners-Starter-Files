var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var helpers = require('./helpers.js');

var App = React.createClass({
  getInitalState: function() {
    return {
      fishes: {},
      order: {}
    }
  },
  addFish: function(fish) {
    var timestamp = (new Date()).getTime();
    this.state.fishes['fish-' + timestamp] = fish;
    this.setState({fishes: this.state.fishes});
    console.log(this.state);
  },
  render: function() {
    console.log(this.state);
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market'/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
});

var AddFishForm = React.createClass({
  createFish: function(event) {
    event.preventDefault();
    var fish = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      status: this.refs.status.value,
      desc: this.refs.desc.value,
      image: this.refs.image.value
    }
    this.props.addFish(fish);
  },
  render: function() {
    console.log(this.props);
    return (
      <form className='fish-edit' onSubmit={this.createFish}>
        <input type='text' ref='name' placeholder='Fish Name'/>
        <input type='text' ref='price' placeholder='Fish Price'/>
        <select ref='status'>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea type='text' ref='desc' placeholder='Description'></textarea>
        <input type='text' ref='image' placeholder='URL to Image'/>
        <button type='submit'>+ Add Item</button>
      </form>
    )
  }
})

var Header = React.createClass({
  render: function() {
    return (
      <header className='top'>
        <h1>Catch
          <span className='ofThe'>
            <span className='of'>of</span>
            <span className='the'>the</span>
          </span>
        Day</h1>
        <h3 className='tagline'><span>{this.props.tagline}</span></h3>
      </header>
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
        <h2>Inventory</h2>

        <AddFishForm {...this.props}/>
      </div>
    )
  }
})

var StorePicker = React.createClass({
  mixins: [History],
  goToStore: function(event) {
    event.preventDefault();
    var storeId = this.refs.storeId.value;
    console.log(storeId);
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

var NotFound = React.createClass({
  render: function() {
    return (<h2>Not Found!</h2>)
  }
})

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path='/' component={StorePicker}/>
    <Route path='/store/:storeId' component={App}/>
    <Route path='*' component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
