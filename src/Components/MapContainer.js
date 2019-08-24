import React from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import '../Css/MapContainer.css'



export class MapContainer extends React.Component {
  render() {
    return (
          <Map 
            google={this.props.google}
            containerStyle={{width: '100%', height: 250, position: 'relative'}}

            initialCenter={{
              lat: -41.198414, 
              lng: 174.946896
            }}
            zoom={18}

          >
             <Marker
                title={'Dadeals NaeNae'}
                name={'Dadeals'}
                position={{lat: -41.198414, lng: 174.946896}}
                onClick={this.onMarkerClick} />
          </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCJGZ-RaFjSlerCffntbcWOsjoGS5HWmCs')
})(MapContainer)