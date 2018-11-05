import React from 'react';
import { Component } from 'react';
import { Container } from 'native-base'; 
import RadioList from './RadioList';

export default class Settings extends Component {

    render() {
        return(
            <Container style={{ backgroundColor: 'rgba(255,255,255,1.0)' }}>
                <RadioList />
            </Container>
        )
    }
}