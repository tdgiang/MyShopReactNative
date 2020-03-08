import React,{Component} from 'react';
import{
    View,
    Text,Button
} from 'react-native';


export default class OrderHistory extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'red'}}>
                <Text>OrderHistory</Text>
                <Button  title={"Go back"} onPress={()=>this.props.nav.pop()} />
            </View>
        )
    }
}