import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Icon } from "react-native-elements";
import Navigation from "./app/navigations/Navigation";

import { firebaseApp } from "./app/utils/firebase";

export default function App() {
  return (
   <Navigation></Navigation>
  );
}

