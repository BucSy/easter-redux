import React from 'react';
import { Component } from 'react';
import { View, Picker, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { sendState } from '../../../reducers/sendReducer';
import { sendDataToSrv, setMsgText, setMsgType } from '../../../actions/index';
import { connect } from 'react-redux';
import { ContactForm } from '../../../containers/ContactStyle/ContactFormStyle';

interface ContactFormComponentProps {
    send: sendState;
    sendDataToSrv: typeof sendDataToSrv;
    setMsgText: typeof setMsgText;
    setMsgType: typeof setMsgType;
}

class ContactFormComponent extends Component<ContactFormComponentProps> {
    render() {
        return(
            <View>
                <View style={ContactForm.mainTextView}>
                    <Text style={ContactForm.mainText}>Kapcsolat</Text>    
                </View>
                <View style={ContactForm.contactTypeTextView}>
                    <Text style={ContactForm.contactTypeText}>Kapcsolat formája: </Text>
                </View>
                <View style={ContactForm.pickerView}>
                    <Picker
                        selectedValue={this.props.send.msgType}
                        onValueChange={(itemValue: string) => this.props.setMsgType(itemValue)}
                        enabled={this.props.send.editable}
                        style={{width: "75%"}}>
                            <Picker.Item label="Hiba bejeletés" value="hiba" />
                            <Picker.Item label="Szöveges értékelés" value="ertekeles" />
                            <Picker.Item label="Vers beküldés" value="vers" />
                    </Picker>
                </View>
                <View style={ContactForm.contactTypeTextView}>
                    <Text style={ContactForm.contactTypeText}>
                        Üzenet:
                    </Text>
                </View>
                <View style={ContactForm.contactTextView}>
                    <TextInput style={ContactForm.textInputStyle} maxLength={250} multiline={true} onChangeText={(text) => this.props.setMsgText(text)} editable={this.props.send.editable}/>
                </View>
                <View style={ContactForm.buttonView}>
                <Button
                    onPress={() => this.props.sendDataToSrv(this.props.send.msgType, this.props.send.msgText)}
                    title='Küldés'
                    disabled={this.props.send.loading}
                    buttonStyle={ContactForm.sendButton}
                />
                </View>
            </View>
        )
    }
}

function mapStateToProps(state: any) {
    return {
      send: state.send
    };
}

export default connect(mapStateToProps, { sendDataToSrv, setMsgText, setMsgType })(ContactFormComponent);