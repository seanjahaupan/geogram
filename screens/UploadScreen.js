import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class UploadScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
