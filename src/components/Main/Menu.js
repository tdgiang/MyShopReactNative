import React,{Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../../style/styles';
const avatar=require("../../images/avata.jpg")

export default class Menu extends Component{
    render(){
        return(
            <View style={[styles.container,{backgroundColor:'rgb(0, 158, 115)',marginRight:2}]} >
                <View style={styles.topMenu}>
                    <Image style={styles.imgAvatar} source={avatar} />
                    <Text style={styles.txtName} >Trần Đức Giang</Text>

                </View>

                <View  style={styles.botMenu}  >
                    <TouchableOpacity onPress={()=>this.props.navigator.push("OrderHistory")} style={styles.btnMenu}>
                        <Text  style={styles.txtCenter}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigator.push("ChangeInfo")} style={styles.btnMenu}>
                        <Text style={styles.txtCenter}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigator.push("Authentication")} style={styles.btnMenu}>
                        <Text style={styles.txtCenter}>Sign Out</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}