import {StyleSheet,Dimensions} from 'react-native';

const heightPhone=Dimensions.get('window').height;
const widthPhone=Dimensions.get('window').width;
const  styles=StyleSheet.create({
    container:{
        flex:1
    },

    iconTab:{
        width:30,
        height:30
    },
    tabBar:{
        backgroundColor:'rgb(0, 158, 115)',
        height:80,
        
    },
    row:{
       
        flex:1,
        flexDirection:'row',
        marginHorizontal:10,
        justifyContent:'space-between',
        marginTop:10,
        marginBottom:5
    },
    txtTitle:{
        color:'white',
        fontSize:22,
        
    },
    txtInput:{
        flex:1,
        marginHorizontal:15,
       
        marginBottom:10
    },
    input:{
        height:30,
        backgroundColor:'white',
        padding:0
    },
    topMenu:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    botMenu:{
        flex:3,

    },
    btnMenu:{
        backgroundColor:'white',
        padding:10,
        margin:10,
        borderRadius:10
    },
    txtCenter:{
        textAlign:'center',
        fontSize:22,
        color:"rgb(0, 158, 115)",
        fontWeight:'bold'
    },
    imgAvatar:{
        width:150,
        height:150,
        borderRadius:75
    },
    txtName:{
        fontSize:22,
        color:'white'
    },
    inputChangInfo:{
        borderWidth:2,
        borderColor:"rgb(0, 158, 115)",
        padding:10,
        marginHorizontal:10,
        borderRadius:20,
        marginVertical:10

    },
    center:{
        flex:1,
        justifyContent:"center",
    },
    btnChangeInfo:{
        backgroundColor:"rgb(0, 158, 115)",
        padding:10,
        borderRadius:20,
        marginHorizontal:10,

    },
    txtChange:{
        color:'white',
        textAlign:'center',
        fontSize:16,
        padding:5
    },
    loginBot:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    loginTop:{
        flex:5,
        justifyContent:'center',
        alignItems:'center'
    },
    btnIn:{
        backgroundColor:'white',
        paddingHorizontal:30,
        paddingVertical:5,
        marginRight:1,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20
    },
    btnUp:{
        backgroundColor:'white',
        paddingHorizontal:30,
        paddingVertical:5,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        marginLeft:1,
    },
    inputSign:{
        backgroundColor:'white',
        width:300,
        height:50,
        marginVertical:10,
        borderRadius:20,
        paddingHorizontal:20

    },
    btnSign:{
        borderWidth:2,
        borderColor:'white',
        width:300,
        height:50,
        justifyContent:'center',
        borderRadius:20,
        marginVertical:10,

    },
    tabBarSign:{
        height:55,
        justifyContent:'center',
        alignItems:'center'
    },
    background:{
        flex:1,
        backgroundColor:'rgba(120,120,120,0.3)'

    },
    collection:{
        height:(heightPhone/3),
        backgroundColor:'white',
        margin:10,
        elevation:1,
        marginBottom:0
    
    },
    
    imgBanner:{
        width:widthPhone-40,
        height:180,
        margin:10,
        resizeMode:'contain'

    },
    txtHome:{
        textTransform:'uppercase',
        color:'gray',
        fontSize:22,
        marginLeft:15,
        marginBottom:0

    },
    topProduct:{
        backgroundColor:'white',
        margin:10,
        elevation:1,
        marginBottom:0


    },
    item:{
        width:(widthPhone/2)-30,
        height:(heightPhone/3)+40,
        alignItems:'center',
        shadowOffset:{width:0,height:5},
        elevation:1,
        borderBottomColor:'gray',
        margin:10,
       
        


    },
    imgProduct:{
        width:(widthPhone/2),
        height:(heightPhone/3)-30,
        resizeMode:'contain',
        marginTop:10
       
    },
    nameProduct:{
        textAlign:'left',
        fontWeight:'500',
        fontSize:20
    },
    giaProduct:{
        color:'red',
        textAlign:'left',
        fontWeight:'500',
        fontSize:20
        
    }
    


    


})


export default styles;

