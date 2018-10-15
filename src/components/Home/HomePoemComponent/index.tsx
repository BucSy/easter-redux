import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { articleState } from '../../../reducers/articleReducer';
import { styles } from '../../../containers/HomeStyle';

interface HomePoemComponentProps {
    article: articleState
}

class HomePoemComponent extends Component<HomePoemComponentProps> {
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
                        height: 35
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
                        height: 35,
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

export default connect(mapStateToProps)(HomePoemComponent);