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

export default class PhotoScreen extends React.Component {
  
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
            name='heart'
            type='simple-line-icon'
            reverseColor = 'black'
            containerStyle = {styles.iconStyle}
            onPress = {() => console.log('You liked card '+ item.id)}
          />
          <Text>Number of Likes</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
});
