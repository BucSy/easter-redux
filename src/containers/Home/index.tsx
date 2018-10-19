import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  AsyncStorage
} from 'react-native';
import { Button } from 'react-native-elements';
import { favouriteData } from '../../actions/index';
import { getData, newFavData, getFavData, setPoemData } from '../../reducers/dataReducer/actions';
import { setArticleText, setArticleKateg, newPoem } from '../../reducers/articleReducer/actions';
import { connect } from 'react-redux';
import { articleState } from '../../reducers/articleReducer';
import { dataState } from '../../reducers/dataReducer';
import { selectedItemState } from '../../reducers/selectedItemReducer';
import HomePoem from '../Home/HomePoem';
import HomeBottomImage from '../Home/HomeBottomImage';
import { styles } from './styles';

interface HomeProps {
  setArticleKateg: typeof setArticleKateg;
  setArticleText: typeof setArticleText;
  newFavData: typeof newFavData;
  getData: typeof getData;
  data: dataState;
  article: articleState;
  items: selectedItemState;
  favouriteData: typeof favouriteData;
  newPoem: typeof newPoem;
  setPoemData: typeof setPoemData;
}

class Home extends Component<HomeProps> {
  constructor(props: any) {
    super(props);
    AsyncStorage.setItem('itemSelected', 'itemOne');
    this.props.setPoemData();
    this.props.favouriteData();
  }

  getNewArticle = () => {
    if (this.props.data.data !== null){
      this.props.newPoem(this.props.items.selectedItem, this.props.data.data);
    } else {
      alert("Nincs internetkapcsolatod");
    }
  }

  render() {
    console.log("Home rendered");
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(255,255,255,1.0)"
          barStyle="dark-content"
        />
        <ScrollView>
          <HomePoem />
          <View style={styles.button}>
            <Button
              onPress={() => this.getNewArticle()}
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

export default connect(mapStateToProps, { getData, setPoemData, newPoem, favouriteData, setArticleText, setArticleKateg, getFavData, newFavData })(Home);