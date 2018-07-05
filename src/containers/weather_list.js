import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  //render one city object and all of its data
  renderWeather(cityData) {
    //It's an aray. We're rendering a list and wehnever we have
    //a list we need to provide a unique key property
    //rule behind adding a key on a react list we add it to the top
    //level element in teh list and it has to be some unique piece of cityData
    //here the city name
    const name = cityData.city.name;
    //map over cityData.list and each object are passed into funcion as
    //argument weather which will return the temperature
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log(temps);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    );
}

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        {/* the rows are the city charts*/}
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

/*function mapStateToProps (state) {
  //specifically are using the state of
  //weather state.weather bc we assigned our weather reducer
  //to the weather key in combinedreducers
  return { weather: state.weather }
}
With ES6 can rewrite funton as below*/

function mapStateToProps ({ weather }) {
  return { weather }; // {weather} == {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
