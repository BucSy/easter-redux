import React from 'react';
import { Component } from 'react';
import { View, Text, Picker, TextInput, ActivityIndicator, Modal, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';
import { sendDataToSrv, setMsgText, setMsgType, setErrorNull } from '../actions/index';
import { connect } from 'react-redux';
import { sendState } from '../reducers/sendReducer';

interface ContactProps {
    send: sendState;
    setErrorNull: typeof setErrorNull;
    setMsgText: typeof setMsgText;
    setMsgType: typeof setMsgType;
    sendDataToSrv: typeof sendDataToSrv;
}

class Contact extends Component<ContactProps> {
    render() {
        return(
            <View style={{backgroundColor: 'rgba(255,255,255,1.0)', flex: 1 }}>
                <Modal
                    animationType="fade"
                    visible={this.props.send.error}
                    onRequestClose={() => this.props.setErrorNull()}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text style={{marginTop: 20, fontSize: 20}}>Hiba: {this.props.send.errorText}</Text>
                        <TouchableHighlight
                            onPress={() => {
                                this.props.setErrorNull();
                            }}>
                            <Text style={{marginTop: 20, color: '#E53935'}}>Bezárás</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{fontSize: 20, color: '#E53935' }}>Kapcsolat</Text>    
                </View>
                <View style={{marginLeft: 25, marginTop: 25}}>
                    <Text style={{color: 'black'}}>Kapcsolat formája: </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Picker
                    selectedValue={this.props.send.msgType}
                    onValueChange={(itemValue: string) => this.props.setMsgType(itemValue)}
                    enabled={this.props.send.editable}
                    style={{width: "75%"}}
                >
                    <Picker.Item label="Hiba bejeletés" value="hiba" />
                    <Picker.Item label="Szöveges értékelés" value="ertekeles" />
                    <Picker.Item label="Vers beküldés" value="vers" />
                </Picker>
                </View>
                <View style={{marginLeft: 25, marginTop: 25}}>
                    <Text style={{color: 'black'}}>
                        Üzenet:
                    </Text>
                </View>
                <View style={{width: "75%", justifyContent: 'center', alignSelf: 'center' }}>
                    <TextInput style={{width: '100%'}} maxLength={250} multiline={true} onChangeText={(text) => this.props.setMsgText(text)} editable={this.props.send.editable}/>
                </View>
                <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center',}}>
                <Button
                    onPress={() => this.props.sendDataToSrv(this.props.send.msgType, this.props.send.msgText)}
                    title='Küldés'
                    disabled={this.props.send.loading}
                    buttonStyle={{
                        backgroundColor: '#2196F3',
                        borderRadius: 5,
                        borderWidth: 0,
                    }}
                />
                </View>
                <View style={{marginTop: 30}}>
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
  
export default connect(mapStateToProps, {sendDataToSrv, setMsgText, setMsgType, setErrorNull})(Contact);