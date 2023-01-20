import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    margin: 15,
    backgroundColor: '#eee',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
