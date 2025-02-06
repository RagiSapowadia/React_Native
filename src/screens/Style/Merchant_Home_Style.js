import { StyleSheet } from "react-native";
const merchantstyles = StyleSheet.create
(
    {
        container: {
            flex: 1, backgroundColor: "white", position: "relative"
        },
        upper: {
          position: "relative",  borderColor: '#696969', borderBottomWidth:1, width:"100%", height:"9%"
        },
        bottom: {
          position: "relative", width:"100%", height:"6%"
        },
        bottomline: {
          position: "relative", width:"100%", height:"3%"
        },
        logo: {
          height:50, width:70, position: "absolute",marginLeft:20,  marginTop:10
        },
        notify: {
          height: 27,width:24, position:"absolute", marginLeft:350, marginTop:25
        },
        center: {
          width: "100%", height:"82%"
        },
        home: {
          height: 32,width:30,position:"absolute", marginLeft:35
        },
        hometext: {
          marginLeft: 34, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        search: {
          height: 25,width:25,position:"absolute", marginLeft: 115, marginTop:3.6
        },
        searchtext: {
          marginLeft: 109, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        category: {
          height: 28,width:28,position:"absolute", marginLeft: 185, marginTop:3.6
        },
        categorytext: {
          marginLeft: 174, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        chat: {
          height: 28,width:28,position:"absolute", marginLeft: 255, marginTop:3.6
        },
        chattext: {
          marginLeft: 257, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        profile: {
          height: 28,width:28,position:"absolute", marginLeft: 325, marginTop:3.6
        },
        profiletext: {
          marginLeft: 323, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        centertext: {
          marginLeft: 35,marginTop:15,marginBottom:15, fontWeight: 'bold', color: '#000000', fontFamily: 'sans-serif-light', fontSize:20
        },
        category_denim: {
          height:120, width:120, marginLeft:45,marginTop:1, borderRadius:30
        },
        category_chiffon: {
          height:120, width:120, marginLeft:225, marginTop:-120, borderRadius:30
        },
        category_organza: {
          height:120, width:120, marginLeft:45,marginTop:30, borderRadius:30
        },
        category_silk: {
          height:120, width:120, marginLeft:225,marginTop:-124, borderRadius:30
        },
        category_velvet: {
          height:120, width:120, marginLeft:45,marginTop:35, borderRadius:30
        },
        category_wool: {
          height:120, width:120, marginLeft:225,marginTop:-124, borderRadius:30
        },
        category_cotton: {
          height:120, width:120, marginLeft:45,marginTop:38, borderRadius:30
        },
        category_satin: {
          height:120, width:120, marginLeft:225,marginTop:-124, borderRadius:30
        },
        category_georgette: {
          height:120, width:120, marginLeft:45,marginTop:38, borderRadius:30
        },
        category_poplin: {
          height:120, width:120, marginLeft:225,marginTop:-124, borderRadius:30
        },
        denimtext: {
          marginLeft:75,marginTop:15,fontSize:18,color:"#000000"
        },
        chiffontext: {
          marginLeft:255,marginTop:-25,fontSize:18,color:"#000000"
        },
        organzatext: {
          marginLeft:70,marginTop:15,fontSize:18,color:"#000000"
        },
        silktext: {
          marginLeft:270,marginTop:-25,fontSize:18,color:"#000000"
        },
        velvettext: {
          marginLeft:80,marginTop:15,fontSize:18,color:"#000000"
        },
        wooltext: {
          marginLeft:265,marginTop:-25,fontSize:18,color:"#000000"
        },
        cottontext: {
          marginLeft:76,marginTop:15,fontSize:18,color:"#000000"
        },
        satintext: {
          marginLeft:260,marginTop:-25,fontSize:18,color:"#000000"
        },
        georgettetext: {
          marginLeft:66,marginTop:15,fontSize:18,color:"#000000"
        },
        poplintext: {
          marginLeft:260,marginTop:-25,fontSize:18,color:"#000000",marginBottom:20
        },
    }
);

export {merchantstyles}