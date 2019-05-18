import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as MapsActions } from '../../store/ducks/maps';
import mapboxConfig from '../../config/mapboxConfig';

import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  render() {
    const { maps, changeViewport, getPosition } = this.props;
    return (
      <MapGL
        {...maps.viewport}
        onClick={position => getPosition(position.lngLat)}
        mapStyle={mapboxConfig.mapStyle}
        mapboxApiAccessToken={mapboxConfig.token}
        onViewportChange={viewport => changeViewport(viewport)}
      >
        <Marker
          latitude={-22.902570209580535}
          longitude={-43.18347356327128}
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
