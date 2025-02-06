import { StyleSheet } from "react-native";
const searchstyles = StyleSheet.create
(
    {
        searchbar: {
            backgroundColor:"#FFFFFF", height:65, borderBottomColor:"#696969", borderBottomWidth:1,width:"100%",position:"relative",display:'flex',flexDirection:'row'
           },
           searchicon:{
                 height:23, width:23, marginTop:22, marginLeft:15
           },
           cancel:{
            height:20, width:20, marginTop:22,marginLeft:15
      },
           searchi:{
                 height:58, width:"72%",backgroundColor:"#FFFFFF", marginTop:5,marginLeft:15,fontSize:18
           },
    }
);

export {searchstyles}