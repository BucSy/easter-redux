import { StyleSheet }  from 'react-native';

export const styles = StyleSheet.create({
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
        height: 55,
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
      rightButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 5,
        paddingLeft: 2
      }
});