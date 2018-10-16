import { StyleSheet } from 'react-native';

export const ErrorModalStyle = StyleSheet.create({
    modalView: {
        justifyContent: "center",
        alignItems: "center"
    },
    errorText: {
        marginTop: 20,
        fontSize: 20
    },
    closeButton: {
        marginTop: 20,
        color: '#E53935'
    }
});