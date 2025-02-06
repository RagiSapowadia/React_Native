import { StyleSheet } from "react-native";
const tailorliststyles = StyleSheet.create
(
    {
       tailor:{
        height:100, width:"100%",marginTop:10,borderBottomColor:"#696969",borderBottomWidth:1,display:'flex',flexDirection:"row"
       },
       findtext:{
        paddingLeft: 35,marginTop:15, fontWeight: 'bold', color: '#000000', fontFamily: 'sans-serif-light', fontSize:20,borderBottomColor:"#696969",borderBottomWidth:1,paddingBottom:10
       },
       pic:{
        marginTop:12,marginLeft:8,height:60,width:80  
       },
       chat:{
        marginLeft:250,height:30,width:30,marginTop:26
       },
    }
);

export {tailorliststyles}