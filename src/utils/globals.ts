import {Dimensions, StyleSheet} from 'react-native';

// flickr public key
const api_key: string = '8f29583c464949b9e9b85d5c20751409';
//
export const BASE_URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}`;
// device width
export const windowWidth = Dimensions.get('window').width;
// global styles
export const styles = StyleSheet.create({
  container: {flex: 1},
});

export default null;
