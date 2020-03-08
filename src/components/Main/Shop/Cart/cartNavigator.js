import React,{Component} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Cart from './cart';
import Detail from '../detail/detail';



function CartScreen({ navigation }) {
  return (
    <Cart navigator={navigation} />
  );
}

function DetailsScreen(navigation) {
  return (
    <Detail navigator={navigation}  />
  );
}



const Stack = createStackNavigator();

export default class CartNavigator extends Component{
    render(){
        return (
            <NavigationContainer independent={true}  >
                <Stack.Navigator initialRouteName="Cart">
                    <Stack.Screen 
                        name="Cart" 
                        component={CartScreen}
                        options={{headerStyle:{
                            opacity:0,
                            height:0
                        }}}  
                    />
                    <Stack.Screen 
                        name="Details" 
                        component={DetailsScreen}
                       
                     />


                </Stack.Navigator>
            </NavigationContainer>
          );

    }
 
}