import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  AsyncStorage,
  Share
} from 'react-native';
import { Button } from 'react-native-elements';
import { getData, setArticleText, setArticleKateg, getFavData, newFavData } from '../../actions/index';
import { connect } from 'react-redux';
import { articleState } from '../../reducers/articleReducer';
import { dataState } from '../../reducers/dataReducer';
import { selectedItemState } from '../../reducers/selectedItemReducer';
import HomePoemComponent from '../Home/HomePoemComponent';
import HomeBottomImage from '../Home/HomeBottomImage';
import { styles } from '../../containers/HomeStyle';

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
          <HomePoemComponent />
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
        <HomeBottomImage />
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    data: state.dataR,
    article: state.article,
    items: state.items
  };
}

export default connect(mapStateToProps, { getData, setArticleText, setArticleKateg, getFavData, newFavData })(Home);