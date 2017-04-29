import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Button } from 'react-native-elements';

import Exponent from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class UploadScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image:null}
    
  }
 
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    let { image } = this.state;
    return (

      <View style={styles.container}>
        <TouchableOpacity onPress={this._pickImage}>
          <View>
            <Text>
              Pick an image from camera roll
            </Text>
          </View>
        </TouchableOpacity>
        {image && 
          <Image source = {{uri: image}} style={{width: SCREEN_WIDTH, height:SCREEN_WIDTH}} />}
        <Button title='Take a photo!' backgroundColor = 'blue' onPress = {this._takePhoto}/>
      </View>
    );
  }

  _pickImage = async() => {
    let result = await Exponent.ImagePicker.launchImageLibraryAsync({
    });

    console.log(result);

    if(!result.cancelled) {
      this.setState({image: result.uri});
    }
  }

  _takePhoto = async() => {
    let result = await Exponent.ImagePicker.launchCameraAsync({
      //allowsEditing: true,

    });
    console.log(result);
    if(!result.cancelled) {
      //update state with picture
      this.setState({image: result.uri});
      //post to database with image, timestamp, location, comments
    }

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

});
