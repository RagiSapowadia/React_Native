import { StyleSheet } from "react-native";
const buystyles = StyleSheet.create
(
    {
        ordersumm:{
            height: "27%", width:"100%", borderBottomColor:"#000000", borderBottomWidth:1
        },
        order:{
            fontSize:25, margin:19.5, color:"#000000", padding:1
        },
        summary:{
            fontSize:30,marginTop:-27, marginLeft:19.5, color:"#000000"
        },
        backarrow:{
                height:24, width:24, marginLeft:345, marginTop:-60
        },
        denimimg:{
            height:120, width:120, marginTop:35, marginLeft:28
        },
        product_name:{
             marginLeft:170, marginTop:-115, fontSize:20, color:"#000000"
        },
        product_price:{
            height:30,width:50,paddingTop:2, marginLeft:170,alignItems:"center", fontSize:20, color:"#000000"
       },
       product_qty:{
        height:25,width:50, marginLeft:170,alignItems:"center", fontSize:20
       },
       rightarrow:{
        height:20, width:20, marginLeft:350,marginTop:-48, fontSize:20
       },
    }
);

export {buystyles}