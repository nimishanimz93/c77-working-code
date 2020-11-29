
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  WelcomeScreen from './screens/WelcomeScreen.js';
import * as firebase from 'firebase';
import {WebView} from 'react-native-webview';
export default function App() {
  return (
    <WelcomeScreen/>
  );
}