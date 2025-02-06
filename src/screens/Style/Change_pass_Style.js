import { StyleSheet } from "react-native";
const changepwdstyles = StyleSheet.create
(
    {
        upper:{
        position: "relative",  borderColor: '#696969', borderBottomWidth:1, width:"100%", height:"9%", backgroundColor:"#FFFFFF"
        },
        logo:{
        height:50, width:70, position: "absolute",marginLeft:20,  marginTop:10
        },
        center:{
            height:"81%", backgroundColor:"#FFFFFF"
        },
        currentpwd:{
            height:50, width:"90%", borderBottomColor:"#696969", borderBottomWidth:1, alignSelf:"center", marginTop:30, padding:15, fontSize:20
        },
        newpwd:{
            height:50, width:"90%", borderBottomColor:"#696969", borderBottomWidth:1, alignSelf:"center", marginTop:40, padding:15, fontSize:20
        },
        confirmnewpwd:{
            height:50, width:"90%", borderBottomColor:"#696969", borderBottomWidth:1, alignSelf:"center", marginTop:40, padding:15, fontSize:20
        },
        savechanges:{
            borderRadius:30, backgroundColor:"#5FBEBC",alignSelf:"center", width:170,height:50, paddingTop:8, alignItems:'center', marginTop:50
        },
        savechangestext:{
            fontFamily:"Sans-Sarif", fontSize:20, fontWeight: 100, color:"#000000"
        },
        rightarrow:{
            height:18, width:22, marginLeft:320, marginTop:-28
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

export {changepwdstyles}