import React from 'react';
import {
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity


} from 'react-native';
import styles from '../style/styles';
import SignUp from '../components/Authentication/signUp';
import SignIn from '../components/Authentication/signIn';

const func={
    _renderIconTab(url){
        return(
            <Image source={url} style={styles.iconTab} />
        )
    },
    _renderTabBar(menu,shirt,props){
        return(
            <View  style={styles.tabBar}  > 
                    <View style={styles.row}>
                        <TouchableOpacity onPress={()=>props.openPanel()} >
                            <Image style={styles.iconTab}  source={menu}  />
                        </TouchableOpacity>
                        <Text style={styles.txtTitle} >Wearing a Dress</Text>
                        <Image style={styles.iconTab}  source={shirt} />
                    </View>
                    <View  style={styles.txtInput} >
                        <TextInput
                            style={styles.input}
                            placeholder={"What do you want to buy?"}
                        
                        />
                    </View>


                </View>


        )
    },
    _renderLoginTop(isSign,navigator){
        if(isSign){
            return(
                <SignIn  navigator={navigator}/>
    
            )
        }
        else{
            return(
                
                <SignUp />

            )
        }
    },
 




}


export default func