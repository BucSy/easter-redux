import React from 'react';
import { Component } from 'react';
import { selectedItemState } from '../../../reducers/selectedItemReducer';
import { Left, Content, ListItem, Text, Radio, Right } from 'native-base'; 
import { connect } from 'react-redux';
import { setSelectedItem } from '../../../actions/index';

interface RadioListComponentProps {
    items: selectedItemState;
    setSelectedItem: typeof setSelectedItem;
}

class RadioListComponent extends Component<RadioListComponentProps> {
    render() {
        return(
            <Content>
                <Text style={{ fontFamily: 'Lobster-Regular', fontSize: 25, alignSelf: 'center', color: '#E53935' }}>Kategóriák</Text>
                <ListItem onPress={() => {this.props.setSelectedItem('itemOne')}}>
                    <Left>
                        <Text>Összes</Text>
                    </Left>
                    <Right>
                        <Radio selected={ this.props.items.selectedItem == 'itemOne' } />
                    </Right>
                </ListItem>
                <ListItem onPress={() => {this.props.setSelectedItem('itemTwo')}}>
                    <Left>
                        <Text>Humor</Text>
                    </Left>
                    <Right>
                        <Radio  selected={ this.props.items.selectedItem == 'itemTwo' } />
                    </Right>
                </ListItem>
                <ListItem onPress={() => {this.props.setSelectedItem('itemThree')}}>
                    <Left>
                        <Text>Aranyos</Text>
                    </Left>
                    <Right>
                        <Radio  selected={ this.props.items.selectedItem == 'itemThree' } />
                    </Right>
                </ListItem>
                <ListItem onPress={() => {this.props.setSelectedItem('itemFour')}}>
                    <Left>
                        <Text>Népies</Text>
                    </Left>
                    <Right>
                        <Radio  selected={ this.props.items.selectedItem == 'itemFour' } />
                    </Right>
                </ListItem>
            </Content>
        )
    }
}

function mapStateToProps(state: any) {
    return {
      items: state.items
    };
}

export default connect(mapStateToProps, { setSelectedItem })(RadioListComponent);