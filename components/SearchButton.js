import React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';

/**
 * TODO
 * @param {*} params 
 */
const fetchRequest = async (params) => {
//    console.log(params)
    const origin=params.origin //BCN
    const destination=params.destination //LHR
    const departureDate=params.departureDate //2020-06-20
    const ip = 1
    let url = "http://" + ip + ":8080/api/search-availability?origin=" + origin + "&destination=" + destination + "&departureDate=" + departureDate
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

    //const result = await fetch(url)
    //console.log(result)
    return result
}

/**
 * A button that when clicked searches the OMDB database for movies that match the string in the search box
 * @param {Object} getArguments : The key,value pairs to append to the search api url
 * @param {Object} navigation : The navigation object which dictates what screens to navigate to
 */
const SearchButton = props => (
    <TouchableOpacity 
        style={styles.searchButton} 
        onPress={
            async () => {
                try{
                    await search(props.getArguments, props.navigation)
                }catch (e){
                    props.navigation.navigate('Error',{errorMessage: e})
                }
            }
        }
    >
        <Text>Search</Text>
    </TouchableOpacity>
)

/**
 * Sends a request to search the OMDB api for a string. Navigates to a screen displaying the movies that match the search if the search is valid.
 * @param {Object} getArguments : The key,value pairs to append to the search api url : TODO: implement
 * @param {Object} navigation : The navigation object which dictates what screens to navigate to
 */
async function search(getArguments,navigation){
    let request = await fetchRequest(getArguments)
    if (request.errorCode === 0){
        navigation.navigate('SearchList', {request: request, getArguments: getArguments})
    }else{
        //If the search returned no results, navigate to the error screen
        navigation.navigate('Error', {errorMessage: request.Error})            
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchButton: {
      marginTop: 20,
      backgroundColor: '#24D9E8',
      borderRadius: 5,
      padding: 5
    },
})

export default SearchButton