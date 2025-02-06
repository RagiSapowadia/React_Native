import { StyleSheet } from "react-native";
const maxistyles = StyleSheet.create
(
    {
        container: {
            flex: 1, backgroundColor: "white", position: "relative"
        },
        upper: {
          position: "relative",  borderColor: '#696969', borderBottomWidth:1, width:"100%", height:"9%"
        },
       
        logo: {
          height:50, width:70, position: "absolute",marginLeft:20,  marginTop:10
        },
        img: {
          height:450,width:"100%"
        },
        rupee: {
          fontSize:30,fontWeight:"bold",fontFamily:'sans-serif-light',paddingLeft:20,paddingBottom:5,marginTop:10,color:"#000000",borderBottomWidth:1,borderBottomColor:"#000000"
        },
        ps: {
          fontSize:22,fontFamily:'sans-serif-light',fontWeight:"600",textDecorationLine:"underline",paddingLeft:20,paddingBottom:10,marginTop:10,color:"#000000"
        },
        pt: {
          fontSize:15,fontFamily:'sans-serif-light',paddingLeft:20,paddingBottom:3,paddingTop:3,color:"#000000"
        },
        stock: {
          fontSize:22,fontFamily:'sans-serif-light',paddingLeft:20,paddingBottom:25,marginTop:10,color:"#3CB371",fontWeight:"bold"
        },
        buystitch: {
          backgroundColor: "#FFFFFF",width:"50%",alignContent:"center",alignItems:"center",paddingTop:8,paddingBottom:20,marginBottom:20,position:"relative",borderColor:"#000000",borderTopWidth:1.5
        },
        buy: {
          backgroundColor: "#5FBEBC",marginTop:-80.8,width:"50%",alignContent:"center",alignItems:"center",marginLeft:196.5,paddingTop:8,paddingBottom:20,marginBottom:20,borderColor:"#000000",borderTopWidth:1.5,borderLeftWidth:1.5
        },
        buystitchtext: {
          color: "black",fontSize:23
        },
        buytext: {
          color: "black",fontSize:23
        }
    }
);
export {maxistyles}