import React,{Component} from 'react';
import {Platform,StyleSheet,View,Text,Button,Alert,Console,Image} from 'react-native'
import ActionSheet from 'react-native-actionsheet'
import ImagePicker from 'react-native-image-picker';
import placeHolder from './../Images/biryani.jpg'



export default class Operations extends Component
{

	state = {
    selected: '',
  }	

  state = {
  	image : 'https://facebook.github.io/react/logo-og.png',
  }

	render(){
		return(
	<View style={styles.mainContainer}>
					 <View>
        <Text onPress={this.setActionSheet}>Open ActionSheet</Text>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Which one do you like ?'}
          options={['Camera', 'Galary', 'cancel']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => { 
          		this.setState({selected:index})
          		this.addOperation()
           }}
        />
         <Image
          style={{width: 50, height: 50}}
         source={{uri:this.state.image}}
          //source={require('./../Images/biryani.jpg')}
        />

      </View>
				</View>
			);
	}

		//Gallery Operations


		//This is for Camera Operation 
		addOperation() {
						if(String(this.state.selected) == "0"){
							Alert.alert('You have pressed camera button')
						}
						else if(String(this.state.selected) == "1"){
							//Alert.alert('You have pressed galary button')
							this.openPhotos()
						}
						else
						{
							Alert.alert('You have pressed CANCEL button')
						}
				}

		//This is for Action Sheet
		setActionSheet = () =>{
			this.ActionSheet.show()
		}

		//From galary
		openPhotos()
		{
			ImagePicker.showImagePicker(options, (response) => {
			  console.log('Response = ', response);

			  if (response.didCancel) {
			    console.log('User cancelled image picker');
			  } else if (response.error) {
			    console.log('ImagePicker Error: ', response.error);
			  } else if (response.customButton) {
			    console.log('User tapped custom button: ', response.customButton);
			  } else {
			    const source = { uri: response.uri };

			    // You can also display the image using data:
			    // const source = { uri: 'data:image/jpeg;base64,' + response.data };
			    	//Alert.alert(response.uri)
			    this.setState({image:response.uri});
			  }
			});
		}
}


const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const styles = StyleSheet.create({

	mainContainer:{
		flex:1,
		backgroundColor:'lightblue',
		alignItems:'center',
		justifyContent:'center'
	}

});

