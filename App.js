import React from 'react';
import Grid from './components/Grid';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <>
      <Grid />
    </>
  );
};

export default App;
