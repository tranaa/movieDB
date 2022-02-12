import React, { Component } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
import LandingScreen from './screens/Landing';
import DetailScreen from './screens/Details';
import { NavigationContainer } from '@react-navigation/native';

const store = createStore(rootReducer, applyMiddleware(thunk))
const Stack = createStackNavigator();

export class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen name='Home' component={LandingScreen} navigation={this.props.navigation} options={{ title: 'Pop Movies', headerStyle: { backgroundColor: '#212121', }, headerTintColor: '#fff' }}/>
              <Stack.Screen name="Details" component={DetailScreen} navigation={this.props.navigation} options={{ title: 'Movie Details', headerStyle: { backgroundColor: '#212121', }, headerTintColor: '#fff' }}/>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    margin: 0,
    backgroundColor: 'rgb(53, 53, 53)'
  }
});

export default App