import React,{Component} from 'react';
import{
    View,
    Text,
    Button
} from 'react-native';
import Drawer from 'react-native-drawer'

import func from '../../func/func';
import Shop from './Shop/Shop';
import Menu from './Menu';

export default class Main extends Component{

    constructor(props){
        super(props);
    }
    closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };


    render(){
        return(
            <Drawer
            tapToClose={true}
            openDrawerOffset={0.3}
            ref={(ref) => this._drawer = ref}
            content={<Menu navigator={this.props.nav} closePanel={this.closeControlPanel.bind(this)} />}
            >
            <Shop openPanel={this.openControlPanel.bind(this)} />
            </Drawer>

            
            
        )
    }
}