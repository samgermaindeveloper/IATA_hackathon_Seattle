import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';

class FlightPage extends React.Component {
  render(){
    const { navigation } = this.props
    const booking = navigation.state.params.booking
    const recSeat = booking.recommendedSeat
    const flights = booking.flights
    const price = booking.price
    const itemID = booking.itemID
    const offerID = booking.offerID
    const shoppingID = navigation.state.params.shoppingID
    const overallRating = booking.overallRating
    const ratings = booking.ratingDetails
    let randomKey=0
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.flightNames}>
            {flights.map(flight =>
            {randomKey=randomKey+1
            return <View key={randomKey} style={styles.flightsAndDest}>
              <Text>{flight.airline} | {flight.flightNumber} | {flight.aircraftType}</Text>
              <Text style={styles.bold}>{flight.origin}→{flight.destination}</Text>
            </View>
            })}
          </View>
          <View style={styles.priceAndRating}>
            <Text style={styles.bold}>${price}</Text>
            <StarRating
              disabled={true}
              maxStars={5}
              starSize={10}
              rating={overallRating}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
            />
          </View>
        </View>
        <View style={styles.ratings}>
          {ratings.map(rating => <RatingBox key={rating.actor} rating={rating}/>)}
        </View>
        <Text>Recommended Seat: {recSeat}</Text>
        <TouchableOpacity 
            style={styles.bookButton}
            onPress={async () => {
              let url = 'http://10.60.88.31:8080/api/book?offerID=' + offerID + '&price=' + price + '&itemID=' + itemID + '&shoppingID=' + shoppingID
              //console.log(url)
              let response = await fetch(
                url,
                  {
                    method: "get",
                    headers: {
                      'Content-Type': 'application/json' // we will be sending JSON
                    }
                  }
              );
              let result = await response.json();
              console.log(result.order)
              navigation.navigate("Confirmation", {confNum: result.order})}
            }
        >
            <Text>Book!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const TypeLabel = (props) => {
  return (
      <View style={styles.typeOverlay}>
          <Text>{props.type}</Text>
      </View>
  )
}

const RatingBox = (props) => {
  const actor = props.rating.actor
  const numberOfReview = props.rating.numberOfReview
  const rating = props.rating.rate
  const type = props.rating.type
  return (
    <View style={styles.ratingBox}>
       <TypeLabel type={type} />  
      <View style={styles.ratingAtt}><Text>{actor}</Text></View>
      <View style={styles.ratingAtt}>
        <StarRating
          disabled={true}
          maxStars={5}
          starSize={10}
          rating={rating}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
        <Text>Reviews: {numberOfReview}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  bookButton: {
    marginTop: 20,
    backgroundColor: '#24D9E8',
    borderRadius: 5,
    padding: 5,
    width: 70,

    alignItems: 'center'
  },
  container: {
    alignItems: 'center'
  },
  header: {
    backgroundColor:"#EFE",
    flexDirection:"row",
    justifyContent:"space-around",
    width: '100%'
  },
  flightsAndDest:{
    alignItems: 'center'
  },
  flightNames: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent:'center'
  },
  priceAndRating: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  ratingAtt: {
    width: 120,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    
  },
  ratingBox: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  ratings:{
    width: '100%'


    
  },
  typeOverlay:{
    width: '100%',
    height: '100%',
    position: 'absolute',
    right: 0
  }
});

export default FlightPage