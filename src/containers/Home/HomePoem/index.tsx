import React from 'react';
import { Component } from 'react';
import { View, Text, AsyncStorage, Share } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { articleState } from '../../../reducers/articleReducer';
import { styles } from './styles';
import { newFavData } from '../../../reducers/dataReducer/actions';

interface HomePoemProps {
    article: articleState;
    newFavData: typeof newFavData;
}

class HomePoem extends Component<HomePoemProps> {
    
    onLikePressed = () => {
        AsyncStorage
          .getItem('key')
          .then((favs: any) => {
            let _favs: string[] = favs === null ? [] : JSON.parse(favs)
            if( _favs.indexOf(this.props.article.articleText) > -1 ) {
              alert('Már a kedvenceid között van.');
            } else {
              _favs.push(this.props.article.articleText);
              this.props.newFavData(this.props.article.articleText);
              AsyncStorage.setItem('key', JSON.stringify(_favs))
            }
        });
    }

    shareContent = () => {
        Share.share({
          message: this.props.article.articleText,
          title: 'Locsolóvers'
        });
    }
    
    render() {
        return(
            <View style={styles.contentHeight}>
                <View style={styles.versTop}>
                    <Text style={styles.versTopText}><Text>Kategória: </Text><Text style={{ color: '#E53935' }}>{this.props.article.articleKateg}</Text></Text>
                </View>
                <Text style={styles.vers}>
                    {this.props.article.articleText}
                </Text>
                <View style={styles.versBottom}>
                    <View style={styles.rightButton}>
                    <Button 
                        title="Megosztás"
                        onPress={this.shareContent}
                        buttonStyle={{
                        backgroundColor: '#2196F3',
                        borderRadius: 5,
                        borderWidth: 0,
                        height: 45
                    }} />
                    </View>
                    <View style={styles.LeftIcon}>
                    <Button
                        onPress={this.onLikePressed}
                    title='Kedvencekhez!'
                    buttonStyle={{
                        backgroundColor: '#E53935',
                        borderRadius: 5,
                        borderWidth: 0,
                        height: 45,
                    }} />
                    </View>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        article: state.article
    }
}

export default connect(mapStateToProps, { newFavData })(HomePoem);