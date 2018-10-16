import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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