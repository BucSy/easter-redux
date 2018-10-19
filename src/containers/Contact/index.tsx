import React from 'react';
import { Component } from 'react';
import { View, ActivityIndicator, } from 'react-native';
import { connect } from 'react-redux';
import { sendState } from '../../reducers/sendReducer';
import ErrorModal from './ErrorModal';
import ContactForm from './ContactForm';
import { styles } from './styles';

interface ContactProps {
    send: sendState;
}

class Contact extends Component<ContactProps> {
    render() {
        return(
            <View style={styles.screen}>
                <ErrorModal />
                <ContactForm />
                <View style={styles.loadingView}>
                    <ActivityIndicator size="large" color="#E53935" style={{opacity: this.props.send.loading ? 1.0 : 0.0}} />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state: {send: sendState}) {
    return {
      send: state.send
    };
}
  
export default connect(mapStateToProps)(Contact);