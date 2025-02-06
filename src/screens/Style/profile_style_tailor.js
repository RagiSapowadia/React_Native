import { StyleSheet } from "react-native";
const profiletailorstyles = StyleSheet.create
(
    {
        upper: 
        {
        position: "relative",  borderColor: '#696969', borderBottomWidth:1, width:"100%", height:"9%", backgroundColor:"#FFFFFF"
        },
        logo: 
        {
        height:50, width:70, position: "absolute",marginLeft:20,  marginTop:10
        },
        center:{
            height:"81%", backgroundColor:"#FFFFFF"
        },
        profile:{
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
        chat: {
            height: 28,width:28,position:"absolute", marginLeft: 255, marginTop:13.6
        },
        chattext: {
          marginLeft: 257, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        profilebottom: {
        height: 28,width:28,position:"absolute", marginLeft: 325, marginTop:13.6
        },
        profiletext: {
        marginLeft: 323, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
    }
);

export {profiletailorstyles}