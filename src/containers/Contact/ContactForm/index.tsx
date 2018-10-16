import React from 'react';
import { Component } from 'react';
import { View, Picker, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { sendState } from '../../../reducers/sendReducer';
import { sendDataToSrv, setMsgText, setMsgType } from '../../../reducers/sendReducer/actions';
import { connect } from 'react-redux';
import { ContactFormStyle } from './style';

interface ContactFormProps {
    send: sendState;
    sendDataToSrv: typeof sendDataToSrv;
    setMsgText: typeof setMsgText;
    setMsgType: typeof setMsgType;
}

class ContactForm extends Component<ContactFormProps> {
    render() {
        return(
            <View>
                <View style={ContactFormStyle.mainTextView}>
                    <Text style={ContactFormStyle.mainText}>Kapcsolat</Text>    
                </View>
                <View style={ContactFormStyle.contactTypeTextView}>
                    <Text style={ContactFormStyle.contactTypeText}>Kapcsolat formája: </Text>
                </View>
                <View style={ContactFormStyle.pickerView}>
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
                <View style={ContactFormStyle.contactTypeTextView}>
                    <Text style={ContactFormStyle.contactTypeText}>
                        Üzenet:
                    </Text>
                </View>
                <View style={ContactFormStyle.contactTextView}>
                    <TextInput style={ContactFormStyle.textInputStyle} maxLength={250} multiline={true} onChangeText={(text) => this.props.setMsgText(text)} editable={this.props.send.editable}/>
                </View>
                <View style={ContactFormStyle.buttonView}>
                <Button
                    onPress={() => this.props.sendDataToSrv(this.props.send.msgType, this.props.send.msgText)}
                    title='Küldés'
                    disabled={this.props.send.loading}
                    buttonStyle={ContactFormStyle.sendButton}
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

export default connect(mapStateToProps, { sendDataToSrv, setMsgText, setMsgType })(ContactForm);