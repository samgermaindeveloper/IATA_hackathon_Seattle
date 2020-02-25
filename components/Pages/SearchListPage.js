import React from 'react';
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, ScrollView, Text, View } from 'react-native';
import SliderBox from '../SliderBox'
import store from '../../redux/store'
import StarRating from 'react-native-star-rating';


const FlightDetails = (props) => {
    const flight=props.flight
    return (
        // "airline": "KL",
        // "flightNumber": 1234,
        // "oigin": "NCE",
        // "destination": "AMS",
        // "aircraft": "KL-A180"

            <View style={styles.flightDetails}>
                <View style={styles.fdTop}>
                    <Text>Airline: {flight.airline}</Text>
                    <Text>Flight#: {flight.flightNumber}</Text>
                    <Text>{flight.aircraftType}</Text>
                </View>
                <Text style={styles.locations}>{flight.origin}→{flight.destination}</Text>
            </View>
    )
}



const BookingCell = (props) => {
    let randomKey = 0
    const warning = props.booking.suitableForTravellerWheelchair ? <View></View> : <Text style={styles.warning}>Warning: Not suitable for your wheelchair</Text>
    return (
        <TouchableOpacity 
            style={styles.bookingCellContainer}
            onPress={() => props.navigation.navigate("Flight", {booking: props.booking, shoppingID: props.shoppingID})}
        >
        <View>
            <View style={styles.bookingCell}>
                <View>
                    {props.booking.flights.map(flight => {randomKey=randomKey+1; return <FlightDetails key={randomKey} flight={flight} />})}
                </View>
                <View style={styles.bookingCellRight}>
                    <Text>${props.booking.price}</Text>
                    <View style={styles.stars}>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            starSize={10}
                            rating={props.booking.overallRating}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                    </View>
                    {/* <Text>{props.booking.overallRating}</Text> */}
                </View>
    {/*            <Text>{props.booking.ratingDetails}</Text> */}
            </View>
            {warning}
            </View>
        </TouchableOpacity>
    );
}

class SearchListPage extends React.Component {

    render(){
        const { navigation } = this.props;
        let randomKey=1

        return (
            <View>
                <View style={styles.header}>
                <SliderBox/>
                </View>
                <ScrollView>
                    {navigation.getParam('request').offers.filter(offer => offer.price <= store.getState().price.price).filter(offer => offer.overallRating >= store.getState().rating.rating).map(booking => { randomKey=randomKey+1; return <BookingCell key={randomKey} navigation={navigation} booking={booking} shoppingID={navigation.getParam('request').shoppingID}/>})}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  bookingCell: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: 'hidden',

    

  },
  bookingCellContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    alignItems: 'center'

  },
  bookingCellRight: {
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#EFE',
  },
  flightDetails: {
      flexDirection: "row",
      justifyContent: "space-around",
      margin: 5,
      backgroundColor: "#ddd",
      alignItems: "center"
  },
  locations:{
      margin: 10,
      fontSize: 16
  },
  stars: {
      maxWidth: 60,
      alignItems: 'center'
  },
  warning:{
      color: 'red',
      textAlign: 'center'
  }
});

export default SearchListPage;