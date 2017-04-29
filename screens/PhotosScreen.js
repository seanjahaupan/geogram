import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { MonoText } from '../components/StyledText';
import DummyData from '../constants/DummyData';
import Colors from '../constants/Colors';

export default class PhotoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likes:{1:0,2:0,3:2,4:0,5:0,6:0,7:0,8:0}, 
                  liked:{1:false, 2:false, 3:false,4:false, 5:false,6:false, 7:false, 8:false}}
  }

  static route = {
    navigationBar: {
      title: 'Photos'
    },
  };
  
  renderCard(item) {
    return (
      <Card
        key={item.id}
        image={{  uri: item.uri }}
        title={item.text}
      >
        <Text>Comments go here</Text>
        <View
          style={styles.likes}
        >
          <Icon
            
            color = {this.state.liked[item.id] ? 'red' : 'black'}
            name='heart'
            type='entypo'
            containerStyle = {styles.iconStyle}
            onPress = {() => {
              const likes = {...this.state.likes};
              const liked = {...this.state.liked};
              //check if we liked the image already, if so, then decrease like count
              if (liked[item.id]) {
                likes[item.id]--;
              } else {
                likes[item.id]++;
              }
              //switch liked state
              liked[item.id] = !liked[item.id]

              this.setState({likes,liked})
              //switch state
              }}
          />
          <Text>  {this.state.likes[item.id]} Number of Likes</Text>
        </View>
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={this.props.route.getContentContainerStyle()}>


            {DummyData.map( item => {
              return this.renderCard(item);
            })}

       
        </ScrollView>

        
      </View>
    );
  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 10,
    flex:1
  },
 
  getStartedContainer: {
    flex:1
  },

  iconStyle: {
    alignItems: 'flex-start'
  },

  likes:{
    flexDirection: 'row'
  },
  
});
