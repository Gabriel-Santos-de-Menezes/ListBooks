/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListBooks from './screens/ListBooks';
import BookDetails from './screens/BookDetails';
import Favorites from './screens/Favorites';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="ListBooks" component={ListBooks} /> 
          <Stack.Screen name="BookDetails" component={BookDetails} /> 
          <Stack.Screen name="Favorites" component={Favorites} /> 
        </Stack.Navigator>
      </NavigationContainer>
      </>
  );
};


export default App;
