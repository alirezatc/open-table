import React from 'react';
import './App.css';
import SearchBar from './components/search-bar/search-bar.component';
import BusinessList from './components/restaurant-list/restaurant-list.component';
import RestaurantService from './api/RestaurantsAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      businesses: []
    }

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(city, refine) {
    RestaurantService.search(city, refine).then(businesses => {
      this.setState({businesses: businesses});
    })
  }

  render() {
    return (
      <div className="App">
        <nav><h1>Open Table</h1></nav>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
export default App;
