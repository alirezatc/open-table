import React from 'react';
import './search-bar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      refine: '',
    }

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleRefineChange = this.handleRefineChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleCityChange(e) {
    this.setState({ city: e.target.value });
  }

  handleRefineChange(e) {
    this.setState({ refine: e.target.value });
  }

  handleSearch(e) {
    this.props.searchYelp(this.state.city, this.state.refine);

    e.preventDefault();
  }

  render() {
    return (
      <form className="SearchBar">
        <div className="SearchBar-fields">
          <input placeholder="Enter city" onChange={this.handleCityChange} />
          <input placeholder="Refine: name/ address/ area" onChange={this.handleRefineChange} />
        </div>
        <div className="SearchBar-submit">
          {/* <input type="submit" placeholder="Let's Go" onClick={this.handleSearch} /> */}
          <button type="submit" placeholder="Let's Go" onClick={this.handleSearch}>Let's Go</button>
        </div>
      </form>
    )
  }

}

export default SearchBar;