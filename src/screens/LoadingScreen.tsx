import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#000" size="large" />
      <Text style={styles.title}>Flickr Photo Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default LoadingScreen;
