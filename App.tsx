import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ChatScreen} from './src/screens';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4A90E2" barStyle="light-content" />
      <ChatScreen />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
