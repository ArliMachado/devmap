import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';

class Sidebar extends Component {
  render() {
    return (
      <Container>
        <h1>Teste</h1>
      </Container>
    );
  }
}

export default Sidebar;
