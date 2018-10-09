import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
  AsyncStorage,
  Share
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { getData, setArticleText, setArticleKateg, getFavData, newFavData } from '../actions/index';
import { connect } from 'react-redux';
import { articleState } from '../reducers/articleReducer';
import { dataState } from '../reducers/dataReducer';
import { selectedItemState } from '../reducers/selectedItemReducer';

interface HomeProps {
  setArticleKateg: typeof setArticleKateg;
  setArticleText: typeof setArticleText;
  newFavData: typeof newFavData;
  getData: typeof getData;
  data: dataState;
  article: articleState;
  items: selectedItemState;
}

class Home extends Component<HomeProps> {

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

  componentWillMount() { 
    AsyncStorage.setItem('itemSelected', 'itemOne');
    fetch('https://raw.githubusercontent.com/BucSy/pygame_/master/husvet.json', {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => this.props.getData(responseJson))
  }

  getNewArticle = () => {
    if (this.props.data.data !== null){
      switch(this.props.items.selectedItem) {
        case 'itemOne':
         let szam = Math.floor(Math.random() * (36 - 0 + 1)) + 0;
         this.props.setArticleKateg(this.props.data.data[szam].kateg);
         this.props.setArticleText(this.props.data.data[szam].vers);
         break;
        case 'itemTwo':
         szam = Math.floor(Math.random() * (18 - 0 + 1)) + 0;
         this.props.setArticleKateg(this.props.data.data[szam].kateg);
         this.props.setArticleText(this.props.data.data[szam].vers);
         break;
        case 'itemThree':
         szam = Math.floor(Math.random() * (27 - 19 + 1)) + 19;
         this.props.setArticleKateg(this.props.data.data[szam].kateg);
         this.props.setArticleText(this.props.data.data[szam].vers);
         break;
        case 'itemFour':
         szam = Math.floor(Math.random() * (36 - 28 + 1)) + 28;
         this.props.setArticleKateg(this.props.data.data[szam].kateg);
         this.props.setArticleText(this.props.data.data[szam].vers);
         break;
        default:
         szam = Math.floor(Math.random() * (36 - 0 + 1)) + 0;
         this.props.setArticleKateg(this.props.data.data[szam].kateg);
         this.props.setArticleText(this.props.data.data[szam].vers);
         break;
      }
    } else {
      alert("Nincs internetkapcsolatod");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(255,255,255,1.0)"
          barStyle="dark-content"
        />
        <ScrollView>
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
                }}/>
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
        <View style={styles.button}>
        <Button
          onPress={this.getNewArticle}
          title='Következő'
          buttonStyle={{
            backgroundColor: '#2196F3',
            borderRadius: 5,
            borderWidth: 0,
          }}
        />
        </View>
        </ScrollView>
        <View style={{ height: 100, position: 'absolute', bottom: 0, left: 1, right: 1 }}>
          <ImageBackground source={require('../assets/backg.png')} style={{ width: '100%', height: 100, opacity: 0.7}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1.0)',
  },
  contentHeight: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1.0)',
    marginLeft: 15,
    marginTop: 100,
    marginRight: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    elevation: 11,
  },
  versTop: {
    height: 45,
    alignSelf: 'stretch',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'rgba(255,255,255,1.0)'
  },
  versTopText: {
    paddingLeft: 15,
    paddingTop: 8,
    fontFamily: 'Lobster-Regular',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 20,
  },
  vers: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
  },
  versBottom: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,1.0)',
    alignSelf: 'stretch',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
  LeftIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 5,
    paddingRight: 2,
  },
  button: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 5,
    paddingLeft: 2
  }
});

function mapStateToProps(state: any) {
  return {
    data: state.dataR,
    article: state.article,
    items: state.items
  };
}

export default connect(mapStateToProps, { getData, setArticleText, setArticleKateg, getFavData, newFavData })(Home);