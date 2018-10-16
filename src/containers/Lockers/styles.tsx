import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    flatListView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20
    },
    flatListText: {
        fontWeight: 'bold'
    },
    mainView: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,1.0)'
    },
    mainTextView: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    mainText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    flatListMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
});