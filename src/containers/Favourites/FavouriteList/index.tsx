import React from 'react';
import { Component } from 'react';
import { ScrollView, View, FlatList, Text, TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux';
import { getFavData, deleteFavData } from '../../../reducers/dataReducer/actions';
import { dataState } from '../../../reducers/dataReducer';
import { styles } from './styles';

interface FavouriteListProps {
    data: dataState;
    deleteFavData: typeof deleteFavData;
}

class FavouriteList extends Component<FavouriteListProps> {
       
    shareItemFromList(item: string) {
        Share.share({
            message: item,
            title: 'Locsolóvers'
          });
    }

    render() {
        return(
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
                                            <TouchableOpacity onPress={() => this.props.deleteFavData(this.props.data.favData.indexOf(item))}>
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
        )
    }
}

function mapStateToProps(state: any) {
    return {
      data: state.dataR,
    };
}

export default connect(mapStateToProps, { getFavData, deleteFavData })(FavouriteList);