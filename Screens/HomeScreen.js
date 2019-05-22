import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View ,TouchableWithoutFeedback,Alert} from 'react-native';

export default class FlatListBasics extends Component {

actionOnRow(item) {
  Alert.alert(item.value)
}

  render() {
      var names = [
            {key: '0',value:'Hardik'},
            {key: '1',value:'Dabhi'},
            {key: '2',value:'Alpa'},
            {key: '3',value:'Bhanderi'},
            {key: '4',value:'Savan'},
            {key: '5',value:'Dabhi'},
            {key: '6',value:'Paresh'},
            {key: '7',value:'Piplia'},
            {key: '8',value:'Anil'},
            {key: '9',value:'Basantani'},
            {key: '10',value:'Jems'},
            {key: '11',value:'Roy'},
            {key: '12',value:'Falak'},
            {key: '13',value:'Naaz'},
            {key: '14',value:'Jems'},
            {key: '15',value:'Anderson'},
          ];
    return (
      <View style={styles.container}>
        <FlatList
        data = {names}
          renderItem={({item}) => (
           <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('Signup')}>
                  <View style={styles.flatview}>
                     <Text style={styles.items}>{item.value}</Text>
                  </View>
             </TouchableWithoutFeedback>
             )} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
   listView: {
     alignItems: 'center'
   },
   flatview: {
    justifyContent: 'center',
    paddingTop: 1,
    borderRadius: 1,
  },
  items: {
    backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 1,
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})