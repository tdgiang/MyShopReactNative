import React,{Component} from 'react';
import{
    View,
    Text,
    Button
} from 'react-native';


export default class Search extends Component{
    

    render(){
        return(
            <View style={{flex:1,backgroundColor:'green'}}>
                <Text>Search</Text>
                <Button onPress={()=>this.props.navigator.push("Details")} title={"Go to detail"} />
                 
            </View>
        )
    }
}