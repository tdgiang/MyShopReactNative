import React,{Component} from 'react';
import{
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../../../../style/styles';

export default class Item extends Component{
    render(){
        return(
           <TouchableOpacity  onPress={()=>this.props.nav.push('Details')} >
            <View style={styles.item} >
                <Image style={styles.imgProduct} source={this.props.item.img} />
                <View>
                    <Text style={styles.nameProduct} >{this.props.item.name}</Text>
                    <Text style={styles.giaProduct} >{this.props.item.gia}$</Text>
                </View>
            </View>
            </TouchableOpacity>
         

        )
    }
}