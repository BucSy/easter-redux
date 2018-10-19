import React from 'react';
import { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { selectorBySize, selectorByPrice } from '../../reducers/dataReducer/selectors';
import { lockerData } from '../../actions';
import { showSortByPrice, showSortBySize } from '../../reducers/selectedItemReducer/actions'
import { selectedItemState } from '../../reducers/selectedItemReducer';
import { styles } from './styles';
import { dataState } from '../../reducers/dataReducer';

interface LockersProps {
    showSortBySize: typeof showSortBySize;
    showSortByPrice: typeof showSortByPrice;
    items: selectedItemState;
    itemByPrice: { size: string, durationMinutes: number, price: number }[];
    itemBySize: { size: string, durationMinutes: number, price: number }[];
    lockerData: typeof lockerData;
}

class Lockers extends Component<LockersProps> {
    
    onSortBySize() {
        this.props.showSortBySize();
    }

    showBySize() {
        return(
            <FlatList
                data={this.props.itemBySize}
                renderItem={({item}) => 
                    <View style={styles.flatListView}>
                        <Text style={styles.flatListText}>Méret: {item.size}</Text>
                        <Text style={styles.flatListText}>Bérelhető: {item.durationMinutes} perc</Text>
                        <Text style={styles.flatListText}>Ár: {item.price} HUF</Text>
                    </View>
            }
            /> 
        )
    }
    
    onSortByPrice() {
        this.props.showSortByPrice();
    }

    showByPrice() {
            return(
                <FlatList
                    data={this.props.itemByPrice}
                    renderItem={({item}) => 
                        <View style={styles.flatListView}>
                            <Text style={styles.flatListText}>Méret: {item.size}</Text>
                            <Text style={styles.flatListText}>Bérelhető: {item.durationMinutes} perc</Text>
                            <Text style={styles.flatListText}>Ár: {item.price} HUF</Text>
                        </View>
                    }
                /> 
            )
    }

    componentWillMount() {
        this.props.lockerData();
    }

    render() {
        return(
            <View style={styles.mainView}>
                <View style={styles.mainTextView}>
                    <Text style={styles.mainText}> Kiadó Tárolók </Text>
                </View>
                <View style={styles.flatListMain}>
                    <Button title="Sort By Size" onPress={() => this.onSortBySize()}/>
                    <Button title="Sort By Price" onPress={() => this.onSortByPrice()}/>
                </View>
                {this.props.items.showByPrice ? this.showByPrice() : this.showBySize()}
            </View>
        )
    }
}

function mapStateToProps(state: {dataR: dataState, items: selectedItemState}) {
    return {
      data: state.dataR,
      itemBySize: selectorBySize(state),
      items: state.items,
      itemByPrice: selectorByPrice(state)
    };
  }
  
export default connect(mapStateToProps, { showSortByPrice, showSortBySize, lockerData })(Lockers);