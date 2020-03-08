import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput

} from 'react-native';
import styles from '../../style/styles';

export default class SignIn extends Component{
    constructor(props){
        super(props);

        this.state={
            email:"",
            passWord:""
        }

    }


    render(){
        return(
            <View>
                <View style={styles.center}>
                            <TextInput onChangeText={(value)=>{
                               this.setState({email:value})
                            }} 
                                placeholder={"Enter your email"} style={styles.inputSign} />
                            
                            <TextInput  
                                placeholder={"Enter your password"} 
                                style={styles.inputSign}
                                onChangeText={(value)=>{
                                    this.setState({passWord:value})
                                }}
                            />

                            <TouchableOpacity onPress={()=>{
                                this.props.navigator.pop();
                            }} 
                            style={styles.btnSign}>
                                <Text style={styles.txtChange} >SIGN IN NOW</Text>
                            </TouchableOpacity>
                </View>


            </View>
        )
    }
}