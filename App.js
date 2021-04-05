import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './Screens/HomeScreen'
import WelcomeScreen from './Screens/WelcomeScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  HomeScreen:HomeScreen
})

const AppContainer = createAppContainer(AppNavigator)