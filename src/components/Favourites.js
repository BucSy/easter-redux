import React, { Component } from 'react';
import { View, Text, FlatList, ListItem, AsyncStorage, StyleSheet, ScrollView, TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getFavData, deleteFavData } from '../actions/index';
import { connect } from 'react-redux';

class Favourites extends Component {

    componentWillMount() {  
        AsyncStorage.getItem('key').then(JSON.parse).then(items => this.props.getFavData(items));
    }
    
    deleteItemFromList(item){
        index = this.props.data.favData.indexOf(item);
        AsyncStorage
            .getItem('key')
            .then(favs => {
                favs = favs === null ? [] : JSON.parse(favs)
                favs.splice(index, 1);
                AsyncStorage.setItem('key', JSON.stringify(favs))
        }).then(this.props.deleteFavData(index));
    }

    shareItemFromList(item) {
        Share.share({
            message: item,
            title: 'Locsolóvers'
          });
    }

    render() {
        return(
            <View style={{ backgroundColor: 'rgba(255,255,255,1.0)', flex: 1, width: '100%' }}>
                <Text style={{ fontFamily: 'Lobster-Regular', fontSize: 25, alignSelf: 'center', color: '#E53935' }}>Kedvencek</Text>
                <ScrollView>
                    <View style={{ paddingTop: 10 }}>
                        <FlatList
                            data={this.props.data.favData}
                            keyExtractor={item => item}
                            renderItem={({ item }) => (
                                <View style={{ flex: 1 }}>
                                <View style={styles.listItemStyle}>
                                    <Text style={styles.listItemTextStyle}>{item}</Text>
                                    <View style={styles.versBottom}>
                                        <View style={styles.RightIcon}>
                                            <TouchableOpacity onPress={() => this.shareItemFromList(item)}>
                                                <Icon name="share-variant" size={18} color={'#2196F3'}>
                                                    <Text>Megosztás</Text>
                                                </Icon>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.LeftIcon}>
                                            <TouchableOpacity onPress={() => this.deleteItemFromList(item)}>
                                                <Icon name="delete" size={18} color={'#E53935'}>
                                                    <Text>Törlés</Text>
                                                </Icon>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                </View>
                            )}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItemStyle: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,1.0)',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
        elevation: 11,
    },
    listItemTextStyle: {
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
    },
    LeftIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 5,
        paddingRight: 10,
    },
    RightIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 10
    },
    versBottom: {
        height: 35,
        backgroundColor: 'rgba(255,255,255,1.0)',
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopWidth: 1,
        borderColor: 'lightgrey',
      },
});

function mapStateToProps(state) {
    return {
      data: state.dataR,
    };
  }
  
  export default connect(mapStateToProps, { getFavData, deleteFavData })(Favourites);
