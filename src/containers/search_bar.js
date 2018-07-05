import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
  //initialize state of search bar to search bar term
  constructor(props) {
    super(props);

    this.state = { term: ''};

    //this is an instance of SearchBar has a function
    //onInputChange, bind that function to this whihc is SearchBar
    //and then replace on input change
    //with this new bound instance of this function
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
  //  console.log(event.target.value);
    this.setState({ term: event.target.value});
  }

//prevent browser from submitting a form
  onFormSubmit(event) {
    event.preventDefault();

    //We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    //clear searchbar after you hit enter
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {fetchWeather}, dispatch);
}

//use null to ensure mapDispatchToProps goes in as second arg
export default connect(null, mapDispatchToProps)(SearchBar);
