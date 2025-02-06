import { StyleSheet } from "react-native";
const profilecuststyles = StyleSheet.create
(
    {
        upper: 
        {
        position: "relative",  borderColor: '#696969', borderBottomWidth:1, width:"100%", height:75, backgroundColor:"#FFFFFF"
        },
        logo: 
        {
        height:50, width:70, position: "absolute",marginLeft:20,  marginTop:10
        },
        center:{
            height:"81%", backgroundColor:"#FFFFFF"
        },
        profileup:{
            height:110, width:110, alignSelf:"center", marginTop:30
        },
        personalinfo:{
            borderBottomColor:"#696969", borderBottomWidth:1 , height:50, width:"90%", alignSelf:"center", marginTop:48
        },
        personalinfotext:{
            padding:10, fontSize:18, color:'#000000'
        },
        address:{
            borderBottomColor:"#696969", borderBottomWidth:1 , height:50, width:"90%", alignSelf:"center", marginTop:30
        },
        addresstext:{
            padding:10, fontSize:18, color:'#000000'
        },
        measurement:{
            borderBottomColor:"#696969", borderBottomWidth:1 , height:50, width:"90%", alignSelf:"center", marginTop:30
        },
        measurementtext:{
            padding:10, fontSize:18, color:'#000000'
        },
        password:{
            borderBottomColor:"#696969", borderBottomWidth:1 , height:50, width:"90%", alignSelf:"center", marginTop:30
        },
        passwordtext:{
            padding:10, fontSize:18, color:'#000000'
        },
        delAcc:{
            borderBottomColor:"#696969", borderBottomWidth:1 , height:50, width:"90%", alignSelf:"center", marginTop:30
        },
        delAcctext:{
            padding:10, fontSize:18, color:'#000000'
        },
        rightarrow:{
            height:18, width:22, marginLeft:320, marginTop:-28
        },
        uname:{
            fontSize:25,color:'#000000',alignSelf:'center',marginTop:10
        },
        logout:{
            borderRadius:30, backgroundColor:"#5FBEBC",alignSelf:"center", width:150,height:50, paddingTop:8, alignItems:'center', marginTop:38
        },
        logouttext:{
            fontFamily:"Sans-Sarif", fontSize:25, fontWeight: 100, color:"#000000"
        },
        bottom: 
        {
        position: "relative", width:"100%", height:"7%", backgroundColor: '#FFFFFF'
        },
        bottomline: 
        {
        position: "relative", width:"100%", height:"3%", backgroundColor: '#FFFFFF'
        },
        home: 
        {
        height: 32,width:30,position:"absolute", marginLeft:35, marginTop:15
        },
        hometext: 
        {
        marginLeft: 34, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        search: 
        {
        height: 25,width:25,position:"absolute", marginLeft: 115, marginTop:13.6
        },
        searchtext: 
        {
        marginLeft: 109, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        category: 
        {
        height: 28,width:28,position:"absolute", marginLeft: 185, marginTop:13.6
        },
        categorytext: {
        marginLeft: 174, position: "absolute" ,bottom: 15, color: '#000000', fontSize: 12
        },
        order: {
        height: 29,width:29,position:"absolute", marginLeft: 257, marginTop:13.6
        },
        ordertext: {
        marginLeft: 255, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        profilebottom: {
            height: 29,width:29,position:"absolute", marginLeft: 257, marginTop:13.6
        },
        profiletext: {
        marginLeft: 323, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
    }
);

export {profilecuststyles}