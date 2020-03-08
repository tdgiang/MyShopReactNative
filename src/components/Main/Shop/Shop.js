import React,{Component} from 'react';

import {
    View,
    Image,
    TextInput,
    Text,
    Button
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import func from '../../../func/func';
import Contact from './Contact/contact';
import styles from '../../../style/styles';
import HomeNavigator from './Home/HomeNavigator';
import CartNavigator from '../Shop/Cart/cartNavigator';
import SearchNavigator from '../Shop/Search/searchNavigator';

const home=require("../../../images/home.png");
const homeSelect=require("../../../images/homeSelect.png");
const cart=require("../../../images/cart.png");
const cartSelect=require("../../../images/cartSelect.png");
const search=require("../../../images/search.png");
const searchSelect=require("../../../images/searchSelect.png");
const contact=require("../../../images/contact.png");
const contactSelect=require("../../../images/contactSelect.png");
const menu=require("../../../images/menu1.png");
const shirt=require("../../../images/shirt.png");

export default class Shop extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedTab:"home"
        }
    }


    render(){
        return(
            <View style={styles.container} >
                {func._renderTabBar(menu,shirt,this.props)}
                  
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        
                        renderIcon={()=>func._renderIconTab(home)}
                        renderSelectedIcon={() => func._renderIconTab(homeSelect)} 
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <HomeNavigator />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        
                        renderIcon={()=>func._renderIconTab(cart)}
                        renderSelectedIcon={() => func._renderIconTab(cartSelect)} 
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <CartNavigator />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        
                        renderIcon={()=>func._renderIconTab(search)}
                        renderSelectedIcon={() => func._renderIconTab(searchSelect)} 
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <SearchNavigator />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                       
                        renderIcon={()=>func._renderIconTab(contact)}
                        renderSelectedIcon={() => func._renderIconTab(contactSelect)} 
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                  
            </TabNavigator>
            </View>
        
        )
    }
}