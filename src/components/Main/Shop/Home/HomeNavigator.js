import React,{Component} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './home';
import Detail from '../detail/detail';
import ListProduct from '../listProduct/listProduct';


function HomeScreen({ navigation }) {
  return (
    <Home navigator={navigation} />
  );
}

function DetailsScreen(navigation) {
  return (
    <Detail navigator={navigation}  />
  );
}

function ListProductsScreen(navigation) {
    return (
      <ListProduct  navigator={navigation}  />
    );
  }

const Stack = createStackNavigator();

export default class HomeNavigator extends Component{
    render(){
        return (
            <NavigationContainer  independent={true} >
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen}
                        options={{headerStyle:{
                            opacity:0,
                            height:0
                        }}}  
                    />
                    <Stack.Screen 
                        name="Details" 
                        component={DetailsScreen}
                       
                     />

                     <Stack.Screen 
                        name="listProduct"
                        component={ListProductsScreen}
               
                     />
                </Stack.Navigator>
            </NavigationContainer>
          );

    }
 
}