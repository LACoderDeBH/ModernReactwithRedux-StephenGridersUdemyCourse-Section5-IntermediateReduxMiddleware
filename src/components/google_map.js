import React, {Component} from 'react';

class GoogleMap extends Component {
  /* componentDidMount is one of our lifecycle methods that gets
  called automatically afte rthis compoent has been rendered to the screen.
  Then inside of it we called new google.maps.Map
  This is how we create an embedded Google map inside of our document.
  google.maps.Map will take a reference to an HTML node or HTML element
  wherever you want to render this map to.
  So you give it this.refs.map and it finds that element and embeds the map
  so this is where on the screen the map will get rendered to. */
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      //options object
      zoom: 12,
      //where google maps should be centered to find that city location
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    //ref is a direct reference to an html element that has been
    //rendered to the page by this.refs.map
  return <div ref="map" />
  }
}

export default GoogleMap;
