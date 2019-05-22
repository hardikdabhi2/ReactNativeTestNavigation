import React, {Component} from 'react';
import {Platform,Alert,View,Button,FlatList,Text,StyleSheet,Dimensions,TouchableWithoutFeedback} from 'react-native';


 const data = [
  {id: 'a', value: 'A'},
  {id: 'b', value: 'B'},
  {id: 'c', value: 'C'},
  {id: 'd', value: 'D'},
  {id: 'e', value: 'E'},
  {id: 'f', value: 'F'},
]

const numColumns = 3;
const size = Dimensions.get('window').width/numColumns;

const styles = StyleSheet.create({
  itemContainer: {
    flex:1,
    width: size,
    height: size,
    justifyContent:'center'
  },
  item: {
    flex: 1,
    margin: 3,
   // alignItems:'center',
    backgroundColor: 'lightblue',
  }
});

export default class GridView extends Component
{
//Static data with state.
//If you want to use const data like mentionesd above. const data = [],then
//replace data = {data} in Flatlist Class
state = {
      data:[
              {id: 'a', value: 'A'},
              {id: 'b', value: 'B'},
              {id: 'c', value: 'C'},
              {id: 'd', value: 'D'},
              {id: 'e', value: 'E'},
              {id: 'f', value: 'F'},
           ]
}


  render(){
    return(
<FlatList
      data={this.state.data}
      renderItem={({item}) => (
        <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                  <View style={styles.itemContainer}>
                    <Text style={styles.item}>{item.value}</Text>
                 </View>
             </TouchableWithoutFeedback>

        
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns} />
      );
  }

//Function Performing the action
    actionOnRow(item)
      {
        //Alert.alert(item.value)
        this.props.navigation.navigate('Operation')
      }

}








