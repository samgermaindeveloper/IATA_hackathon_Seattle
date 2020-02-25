import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';
import store from '../redux/store.js'
import {setPrice, setRating} from '../redux/actions.js'

class SliderBox extends React.Component {

    state = {price:store.getState().price.price, rating:store.getState().rating.rating}
    
    render(){
        store.dispatch(setPrice({price:this.state.price}))
        store.dispatch(setRating({rating:this.state.rating}))
        return (
            <View style={styles.container}>
                {/* store.dispatch(setBackgroundImage({price:Math.round(value*100)/100})) */}
                <Slider onValueChange={value => this.setState({price:Math.round(value*100)/100})}  value={this.state.price} minimumValue={0} maximumValue={2000} style={{width: 200, height: 40}} /> 
                {/* <Slider onValueChange={value => this.setState({price:Math.round(value*100)/100})}  value={2000} minimumValue={0} maximumValue={2000} style={{width: 200, height: 40}} />  */}
                {/* {() => store.dispatch(setPrice({price:this.state.price}))}
                 */}
                <Text style={styles.bold}>Price: {this.state.price}</Text>
                <Slider onValueChange={value => this.setState({rating:Math.round(value*10)/10})} value={this.state.rating} minimumValue={0} maximumValue={5} style={{width: 200, height: 40}} />
                <Text style={styles.bold}>Minimum Rating: {this.state.rating}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    bold:{
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default SliderBox