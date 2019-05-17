import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as MapsActions } from '../../store/ducks/maps';

import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  // componentDidMount() {
  //   window.addEventListener('resize', this.resize);
  //   this.resize();
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.resize);
  // }

  // resize = () => {
  //   this.setState({
  //     maps: {
  //       viewport: {
  //         ...this.props.maps.viewport,
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       },
  //     },
  //   });
  // };

  handleMapClick(e) {
    const [longitude, latitude] = e.lngLat;
    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  }

  render() {
    const { maps, changeViewport } = this.props;
    return (
      <MapGL
        {...maps.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
        onViewportChange={viewport => changeViewport(viewport)}
      >
        <Marker
          latitude={-23.5439948}
          longitude={-46.6065452}
          onClick={this.handleMapClick}
          captureClick
        >
          <img
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
            }}
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
          />
        </Marker>
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  maps: state.maps,
});

const mapDispatchToProps = dispatch => bindActionCreators(MapsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
