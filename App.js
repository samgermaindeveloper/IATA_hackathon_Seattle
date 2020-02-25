import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import store from './redux/store'
import {setPrice, setRating} from './redux/actions.js'

import SearchPage from './components/Pages/SearchPage'
import SearchListPage from './components/Pages/SearchListPage'
import FlightPage from './components/Pages/FlightPage'
import AttributePage from './components/Pages/AttributePage'
import ErrorPage from './components/Pages/ErrorPage'
import ProfilePage from './components/Pages/ProfilePage'
import BookingPage from './components/Pages/BookingPage'
import ConfirmationPage from './components/Pages/ConfirmationPage';

const StackNavigator = createStackNavigator({
  Search: SearchPage,
  SearchList: SearchListPage,
  Flight: FlightPage,
  Att: AttributePage,
  Confirmation: ConfirmationPage,
  Error: ErrorPage
},{
  initialRouteName: 'Search'
})

const TabNavigator = createBottomTabNavigator({
  Main: StackNavigator,
  Bookings: BookingPage,
  Profile: ProfilePage
},{
  initialRouteName: 'Main'
})

const AppContainer = createAppContainer(TabNavigator)

// function mapStateToProps(state, ownProps) {
//   return {
//       price: state.price
//   };
// }

// const ConnectedRoot = connect(
//   (state) => ({
//     state: state.reducer
//   }),
//   (dispatch) => ({
//     actions: bindActionCreators(mapStateToProps, dispatch)
//   })
// )(AppContainer);
class App extends React.Component {

  render() {
    store.dispatch(setPrice({price:2000}))
    store.dispatch(setRating({rating:0}))
    
    return (
      <AppContainer />
    );
  }
}

export default App

// class AppWithStore extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <App />
//       </Provider>
//     )
//   }
// }

// AppRegistry.registerComponent('App', () => AppWithStore)


// App.propTypes = {
//   price: PropTypes.bool.isRequired
// };

// function mapStateToProps(state, ownProps) {
//   return {
//       price: state.price
//   };
// }

// // export default connect(mapStateToProps)(App);
// export default connect(
//   (state) => ({
//     state: state.reducer
//   }),
//   (dispatch) => ({
//     actions: bindActionCreators(screenActions, dispatch)
//   })
// )(App);
