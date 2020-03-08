import React,{Component} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Search from './search';
import Detail from '../detail/detail';



function SearchScreen({ navigation }) {
  return (
    <Search navigator={navigation} />
  );
}

function DetailsScreen(navigation) {
  return (
    <Detail navigator={navigation}  />
  );
}



const Stack = createStackNavigator();

export default class SearchNavigator extends Component{
    render(){
        return (
            <NavigationContainer independent={true}  >
                <Stack.Navigator initialRouteName="Search">
                    <Stack.Screen 
                        name="Search" 
                        component={SearchScreen}
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