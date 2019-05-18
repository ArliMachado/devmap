import React, { Component, Fragment } from 'react';
import Map from '../../components/Map';
import Sidebar from '../../components/Sidebar';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Map />
        <Sidebar />
      </Fragment>
    );
  }
}

export default Main;
