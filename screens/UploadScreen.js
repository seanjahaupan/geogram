import React from 'react';
import firebase from 'firebase';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  TextInput
} from 'react-native';
import { Button } from 'react-native-elements';
import Exponent from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class UploadScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image:null, imageLocationAndTime: null, photoComments: null}
    
  }
 
  static route = {
    navigationBar: {
      visible: false,
    },
  };

 

  _getLocationAsync = async () => {
    let {status} = await Exponent.Permissions.askAsync(Exponent.Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        imageLocationAndTime: 'Permission to get location denied!',
      });
    }

    let location = await Exponent.Location.getCurrentPositionAsync({});
    this.setState({ imageLocationAndTime: location});
  };

  render() {
    let { image } = this.state;
    return (

      <View style={styles.container}>
        
        {image && 
          (
            <View>
              <Image source = {{uri: image}} style={{width: SCREEN_WIDTH, height:SCREEN_WIDTH}} />
              <TextInput
                autoCorrect = {false}
                autoFocus = {true}
                placeholder = 'Say something about this photo'
                multiline = {true}
                onChangeText={(photoComments) => this.setState({photoComments})}
                style={{height:40 , justifyContent:'center', borderColor:'black', borderWidth:1}}
              />
              <Button title='Post photo' backgroundColor = 'blue' onPress = {()=> this._postPhoto(this.state)} />
            </View> )
        }

        {this.state.imageLocationAndTime && (
          <Text>
            Picture Time: {this.state.imageLocationAndTime.timestamp}
          </Text> 
        )}
        <Button title='Take a photo!' backgroundColor = 'blue' onPress = {this._takePhoto}/>
      </View>
    );
  }


  _takePhoto = async() => {
    let result = await Exponent.ImagePicker.launchCameraAsync({
      //allowsEditing: true,
    });

    if(!result.cancelled) {
      //update state with picture
      this._getLocationAsync();
      this.setState({image: result.uri});
      //post to database with image, timestamp, location, comments
    }

  }

  _postPhoto = ({image, imageLocationAndTime, photoComments}) => {
    console.log(photoComments)
    console.log(image)
    console.log(imageLocationAndTime)
    //firebase.database().ref('/users').set({image, imageLocationAndTime, photoComments})

    //reset states to null
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

});
