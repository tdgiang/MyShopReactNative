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
            email:'',
            phone:'',
            pass:'',
            rePass:''

        }


    }

    render(){
        return(
            <View style={styles.center}>
                            <TextInput 
                                placeholder={"Enter your email"} 
                                style={styles.inputSign}
                                onChangeText={(value)=>this.setState({email:value})}
                                />
                            <TextInput  
                                placeholder={"Enter your number phone"} 
                                style={styles.inputSign}
                                onChangeText={(value)=>this.setState({phone:value})}
                                />
                            <TextInput 
                                placeholder={"Enter your password"} 
                                style={styles.inputSign}
                                onChangeText={(value)=>this.setState({pass:value})}
                                />
                            <TextInput  
                                placeholder={"Re-enter your password"} 
                                style={styles.inputSign}
                                onChangeText={(value)=>this.setState({rePass:value})}
                                />
                            
                            
                            <TouchableOpacity style={styles.btnSign}>
                                <Text style={styles.txtChange} >SIGN IN NOW</Text>
                            </TouchableOpacity>
            </View>
        )
    }
}