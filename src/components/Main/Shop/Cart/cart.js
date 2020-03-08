import React,{Component} from 'react';
import{
    View,
    Text,
    Button
} from 'react-native';


export default class Cart extends Component{
    

    render(){
        return(
            <View style={{flex:1,backgroundColor:'yellow'}}>
                <Text>Screen Cart</Text>
                <Button title={"Go to detail"} onPress={()=>this.props.navigator.push("Details")} />
                
                
            </View>
        )
    }
}