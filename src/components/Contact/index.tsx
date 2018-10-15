import React from 'react';
import { Component } from 'react';
import { View, ActivityIndicator, } from 'react-native';
import { connect } from 'react-redux';
import { sendState } from '../../reducers/sendReducer';
import ErrorModalComponent from './ErrorModalComponent';
import ContactFormComponent from './ContactFormComponent';
import { styles } from '../../containers/ContactStyle';

interface ContactProps {
    send: sendState;
}

class Contact extends Component<ContactProps> {
    render() {
        return(
            <View style={styles.screen}>
                <ErrorModalComponent />
                <ContactFormComponent />
                <View style={styles.loadingView}>
                    <ActivityIndicator size="large" color="#E53935" style={{opacity: this.props.send.loading ? 1.0 : 0.0}} />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state: any) {
    return {
      send: state.send
    };
}
  
export default connect(mapStateToProps)(Contact);