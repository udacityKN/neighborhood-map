/*
Neighborhood Map Project - Map Component
*/

import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 32.7472844,
      lng: -97.0944939
    },
    zoom: 12
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyAPfGDxDzdq6jj-jCrm9I4XdauWzR1ZJy4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={32.7472844}
            lng={-97.0944939}
            text={'AT&T Stadium'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default MapComponent


