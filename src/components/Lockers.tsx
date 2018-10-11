import React from 'react';
import { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { selectorBySize, selectorByPrice } from '../reducers/dataReducer';
import { showSortByPrice, showSortBySize } from '../actions';
import { selectedItemState } from '../reducers/selectedItemReducer';

interface LockersProps {
    showSortBySize: typeof showSortBySize;
    showSortByPrice: typeof showSortByPrice;
    items: selectedItemState;
    itemByPrice: { size: string, durationMinutes: number, price: number }[];
    itemBySize: { size: string, durationMinutes: number, price: number }[];
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
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
                        <Text style={{ fontWeight: 'bold' }}>Méret: {item.size}</Text>
                        <Text style={{ fontWeight: 'bold' }}>Bérelhető: {item.durationMinutes} perc</Text>
                        <Text style={{ fontWeight: 'bold' }}>Ár: {item.price} HUF</Text>
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
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
                            <Text style={{ fontWeight: 'bold' }}>Méret: {item.size}</Text>
                            <Text style={{ fontWeight: 'bold' }}>Bérelhető: {item.durationMinutes} perc</Text>
                            <Text style={{ fontWeight: 'bold' }}>Ár: {item.price} HUF</Text>
                        </View>
                    }
                /> 
            )
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: 'rgba(255,255,255,1.0)'}}>
                <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}> Kiadó Tárolók </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                    <Button title="Sort By Size" onPress={() => this.onSortBySize()}/>
                    <Button title="Sort By Price" onPress={() => this.onSortByPrice()}/>
                </View>
                {this.props.items.showByPrice ? this.showByPrice() : this.showBySize()}
            </View>
        )
    }
}

function mapStateToProps(state: any) {
    return {
      data: state.dataR,
      itemBySize: selectorBySize(state),
      items: state.items,
      itemByPrice: selectorByPrice(state)
    };
  }
  
export default connect(mapStateToProps, { showSortByPrice, showSortBySize })(Lockers);