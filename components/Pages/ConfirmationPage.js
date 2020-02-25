import React, { Component } from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';

export class ConfirmationPage extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.checkmark}><Image source={require('../../assets/checkmark.png')} /></View>
                <Text style={styles.booked}>Booked!</Text>
                <Text>Your order ID is</Text>
                <Text style={styles.orderID}>{navigation.state.params.confNum}</Text>

                <View style={styles.qr}>
                    <Text>Print your QR code</Text>
                    <Image source={require('../../assets/qrcode.png')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    booked: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10
    },
    checkmark: {
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    orderID:{
        fontWeight: 'bold',
        fontSize: 20
    },
    qr: {
        marginTop: 20,
        alignItems: 'center'
    }

})

export default ConfirmationPage;
