import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

const Stack =createStackNavigator();


function authenticationScreen({navigation}){
    return(
        <Authentication nav={navigation} />
    )
}
function changeInfoScreen({navigation}){
    return(
        <ChangeInfo nav={navigation} />
    )
}
function MainScreen({navigation}){
    return(
        <Main nav={navigation} />
    )
}
function orderHistoryScreen({navigation}){
    return(
        <OrderHistory nav={navigation} />
    )
}


export default class app extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator  initialRouteName="Main"  >
                    <Stack.Screen 
                        name="Main"  
                        component={MainScreen} 
                        options={{headerStyle:{
                            opacity:0,
                            height:0
                        }}}  
                    />
                    <Stack.Screen 
                        name="Authentication" 
                        component={authenticationScreen}
                        options={{headerStyle:{
                            opacity:0,
                            height:0
                        }}} 
                    />
                    <Stack.Screen 
                        name="ChangeInfo" 
                        component={changeInfoScreen}
                        options={{
                        title:"Change Info",
                        headerStyle:{
                            backgroundColor:"rgb(0, 158, 115)",
                            height:55,

                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    
                    }}
                    />
                    <Stack.Screen 
                        name="OrderHistory" 
                        component={orderHistoryScreen}
                        options={{
                            title:"Order History",
                            headerStyle:{
                                backgroundColor:"rgb(0, 158, 115)",
                                height:55
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        
                        }}
                        
                    />

                </Stack.Navigator>

            </NavigationContainer>


        )
    }
}
