import React,{Component} from 'react';
import{
    View,
    Text,
    Button,
    TouchableOpacity,
    TextInput
} from 'react-native';

import styles from '../../style/styles';
import func from '../../func/func';

export default class Authentication extends Component{

    constructor(props){
        super(props);
        this.state={
            signIn:true,
            email:"test",
            colorSignIn:'rgb(0, 158, 115)',
            colorSignUp:'gray'
        }
    }
    

  _onPressSignIn(){
      this.setState({
          signIn:true,
          colorSignIn:'rgb(0, 158, 115)',
          colorSignUp:'gray'
      })
  }
  _onPressSignUp(){
      this.setState({
          signIn:false,
          colorSignIn:'gray',
          colorSignUp:'rgb(0, 158, 115)'
      })
  }




    render(){
     
        return(
            <View style={[styles.container,{backgroundColor:'rgb(0, 158, 115)'}]}>
                <View style={styles.tabBarSign} >
                    <Text style={styles.txtName} >Wearing Shop</Text>
                </View>
                
                <View style={styles.loginTop}>
                    {func._renderLoginTop(this.state.signIn,this.props.nav)}

                </View>
                <View style={styles.container} >
                    <View style={styles.loginBot} >
                    <TouchableOpacity onPress={this._onPressSignIn.bind(this)} style={styles.btnIn}>
                        <Text style={[styles.txtCenter,{color:this.state.SignIncolor}]} >SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressSignUp.bind(this)} style={styles.btnUp}>
                        <Text style={[styles.txtCenter,{color:this.state.colorSignUp}]}>SIGN UP</Text>
                    </TouchableOpacity>
                    </View>

                </View>
                
            </View>
        )
    }
}