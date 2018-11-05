import React from 'react';
import { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { sendState } from '../../../reducers/sendReducer';
import { setErrorNull } from '../../../reducers/sendReducer/actions';
import { connect } from 'react-redux';
import { ErrorModalStyle } from './style'

interface ErrorModalProps {
    send: sendState;
    setErrorNull: typeof setErrorNull;
}

class ErrorModal extends Component<ErrorModalProps> {
    render() {
        return(
            <Modal
                animationType="fade"
                visible={this.props.send.error}
                onRequestClose={() => this.props.setErrorNull()}>
                <View style={ErrorModalStyle.modalView}>
                    <Text style={ErrorModalStyle.errorText}>Hiba: {this.props.send.errorText}</Text>
                    <TouchableHighlight
                        onPress={() => {
                            this.props.setErrorNull();
                        }}>
                        <Text style={ErrorModalStyle.closeButton}>Bezárás</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        send: state.send
    }
}

export default connect(mapStateToProps, { setErrorNull })(ErrorModal);