import React,{Component} from 'react';
import{
    View,
    Text,
    Button,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { SliderBox } from "react-native-image-slider-box";
import Item from './item';
import styles from '../../../../style/styles';
const banner= require('../../../../images/temp/banner.jpg');
const maxi= require('../../../../images/temp/maxi.jpg');
const midi= require('../../../../images/temp/midi.jpg');
const mini= require('../../../../images/temp/mini.jpg');
const party= require('../../../../images/temp/party.jpg');
const images=[maxi,midi,mini,party];

import products from '../../../../data/products';

export default class Home extends Component{
    

    render(){
        return(
            <View style={styles.background}>
                <ScrollView>
                    <View style={styles.collection}>
                        <View style={styles.center}>
                            <Text style={[styles.txtHome,{marginTop:10}]} >spring collection</Text>
                        </View>
                        <View style={{flex:8}}>
                            <Image  source={banner} style={styles.imgBanner} />
                        </View>

                    </View>

                    <View style={styles.collection}>
                        <View style={styles.center}>
                            <Text style={[styles.txtHome,{marginTop:10}]} >list of categogy</Text>
                        </View>
                        <View style={{flex:8}}>
                            
                                <SliderBox
                                style={styles.imgBanner} 
                                images={images}
                                autoplay
                                circleLoop
                                onCurrentImagePressed={index =>
                                    this.props.navigator.push('listProduct')
                                  }
                                />
                            
                        </View>

                    </View>        
                    <View style={styles.topProduct}>
                        <View style={styles.center}>
                            <Text style={[styles.txtHome,{marginTop:10}]} >top product</Text>
                        </View>
                        <View style={{justifyContent:'space-around'}}>
                            <FlatList  
                                data={products}
                                numColumns={2}
                                renderItem={(item)=>{
                                    return(
                                        <Item item={item.item} nav={this.props.navigator}  />
                                    )
                                   
                                }}

                            />

                            
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }
}