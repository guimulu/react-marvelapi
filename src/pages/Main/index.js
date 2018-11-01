import React, { Component } from 'react';
import api from '../../services/api';
import { Container } from './styles';

export default class Main extends Component {
  state = {
    character: []
  };

  testMarvel = async (name) => {
    const params = new URLSearchParams();
    params.append('name', `${name}`);

    const characters = await api.get('/characters', params);

    this.setState({
      character: characters.data.data.results
    });
    console.log(this.state.character);
  }

  componentDidMount(){
    this.testMarvel('iron man');
  }

  render(){
    return (
      <Container></Container>
    );
  }
}
