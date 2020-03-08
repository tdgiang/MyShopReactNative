import React,{Component} from 'react';
import{
    View,
    Text,
    Button,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from '../../style/styles';


export default class ChangeInfo extends Component{

    constructor(props){

        super(props);

        this.state={
            name:"Tran Duc Giang",
            adrees:"234/21 Trâu Quỳ",
            phone:"0866912436"
        }

    }

    _onChangeName(value){
        this.setState({
            name:value
        })
    }
    _onChangeAdrees(value){
        this.setState({
            adrees:value
        })
    }
    _onChangePhone(value){
        this.setState({
            phone:value
        })
    }


    render(){
        return(
            <View style={styles.center} >
              
                    <TextInput onChangeText={(value)=>this._onChangeName(value)} style={styles.inputChangInfo} value={this.state.name}  />
                    <TextInput onChangeText={(value)=>this._onChangeAdrees(value)} style={styles.inputChangInfo} value={this.state.adrees}  />
                    <TextInput onChangeText={(value)=>this._onChangePhone(value)} style={styles.inputChangInfo} value={this.state.phone}  />
                    <TouchableOpacity style={styles.btnChangeInfo} >
                        <Text style={styles.txtChange}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
              
                
            </View>
        )
    }
}