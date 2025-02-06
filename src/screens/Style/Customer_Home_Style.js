import { StyleSheet } from "react-native";
const customerstyles = StyleSheet.create
(
    {
        container: 
        {
        flex: 1, backgroundColor: "white", position: "relative",flexDirection: 'column',justifyContent: 'center',alignItems: 'stretch'
        },
        upper: 
        {
        position: "relative",  borderColor: '#696969', borderBottomWidth:1, width:"100%", height:75
        },
        bottom: 
        {
        position: "relative", width:"100%", height:60, backgroundColor: '#FFFFFF',display:"flex"
        },
        bottomline: 
        {
        position: "relative", width:"100%", height:15, backgroundColor: '#FFFFFF'
        },
        logo: 
        {
        height:50, width:70, position: "absolute",marginLeft:20,  marginTop:10
        },
       
        center: 
        {
        width: "100%", height:"82%"
        },
        chatcenter: 
        {
        width: "100%", height:"90%"
        },
        home: 
        {
        height: 32,width:30,position:"absolute", marginLeft:35, marginTop:10
        },
        hometext: 
        {
        marginLeft: 34, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        search: 
        {
        height: 25,width:25,position:"absolute", marginLeft: 135, marginTop:13.6
        },
        searchtext: 
        {
        marginLeft: 128, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        category: 
        {
        height: 28,width:28,position:"absolute", marginLeft: 230, marginTop:13.6
        },
        categorytext: {
        marginLeft: 218, position: "absolute" ,bottom: 15, color: '#000000', fontSize: 12
        },
        order: {
        height: 29,width:29,position:"absolute", marginLeft: 257, marginTop:13.6
        },
        ordertext: {
        marginLeft: 255, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        profile: {
        height: 28,width:28,position:"absolute", marginLeft: 325, marginTop:13.6
        },
        profiletext: {
        marginLeft: 323, position: "absolute", bottom: 15, color: '#000000', fontSize: 12
        },
        centertext: {
        marginLeft: 35,marginBottom:2,marginTop:27, fontWeight: 'bold', color: '#000000', fontFamily: 'sans-serif-light', fontSize:20
        },
        centerendtext: {
        marginLeft: 330,marginTop:-22, fontWeight: 'bold', color: '#000000', fontFamily: 'sans-serif-light', fontSize:15, textDecorationLine:"underline"
        },
        denim:{
        height:110, width:110, marginLeft:25,marginTop:15, backgroundColor:"#696969"
        },
        chiffon:{
        height:110, width:110, marginLeft:1,marginTop:15, backgroundColor:"#696969"
        },
        velvet:{
        height:110, width:110,marginLeft:3, marginTop:15, backgroundColor:"#696969"
        },
        organza:{
        height:110, width:110, marginLeft:3,marginTop:15, backgroundColor:"#696969"
        },
        denimtext:{
        marginLeft:55,marginTop:5, color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        chiffontext:{
        marginLeft:30,marginTop:5,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        velvettext:{
        marginLeft:33,marginTop:4,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        organzatext:{
        marginLeft:30  ,marginTop:5,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        outfit1:{
        height:110, width:110,alignContent:"center", marginLeft:25,marginTop:15, backgroundColor:"#696969"
        },
        maxi:{
        height:110, width:110, marginLeft:25,marginTop:15, backgroundColor:"#696969"
        },
        lehanga:{
        height:110, width:110, marginLeft:1,marginTop:15, backgroundColor:"#696969"
        },
        sarara:{
        height:110, width:110,marginLeft:3, marginTop:15, backgroundColor:"#696969"
        },
        kurti:{
        height:110, width:110, marginLeft:3,marginTop:15, backgroundColor:"#696969"
        },
        maxitext:{
        marginLeft:44,marginTop:5, color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        lehangatext:{
        marginLeft:25,marginTop:5, color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        kurtitext:{
        marginLeft:40,marginTop:5, color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        sararatext:{
        marginLeft:38,marginTop:5, color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        shervanitext:{
        marginLeft:26,marginTop:5,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        trousertext:{
        marginLeft:30,marginTop:5,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        shirttext:{
        marginLeft:62,marginTop:5,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        blazertext:{
        marginLeft:34,marginTop:5,color: '#000000', fontFamily: 'sans-serif-light', fontSize:15
        },
        shirt:{
        height:110, width:110, marginLeft:25,marginTop:15, backgroundColor:"#696969"
        },
        blazer:{
        height:110, width:110, marginLeft:1,marginTop:15, backgroundColor:"#696969"
        },
        shervani:{
        height:110, width:110,marginLeft:3, marginTop:15, backgroundColor:"#696969"
        },
        trouser:{
        height:110, width:110, marginLeft:3,marginTop:15, backgroundColor:"#696969"
        },
        denimview:{
        height:150,width:140,marginRight:22,marginTop: 12
        },
        chiffonview:{
        paddingLeft:22,height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1, marginRight:22, borderColor: '#696969',marginTop: 12
        },
        velvetview:{ 
        paddingLeft:22, height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1, marginRight:22, borderColor: '#696969',marginTop: 12
        },
        organzaview:{ 
        paddingLeft:22, height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginTop: 12,marginRight:22
        },
        maxiview:{
        height:150,width:140,marginRight:22,marginTop: 12
        },
        lehangaview:{
        paddingLeft:22, height:150,width:140, alignContent:"center",alignItems:"center",borderLeftWidth:1,marginRight:22,  borderColor: '#696969',marginTop: 12
        },
        sararaview:{ 
        paddingLeft:22, height:150,width:140,alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginRight:22,marginTop: 12
        },
        kurtiview:{ 
        paddingLeft:22, height:150,width:140,alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginRight:22,marginTop: 12
        },
        trouserview: {
        paddingLeft:22,marginRight:22, height:150,width:140,alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginTop: 12
        },
        shirtview: {
        height:150,width:140,marginRight:22,marginTop: 12
        },
        blazerview: {
        paddingLeft:22,marginRight:22, height:150,width:140,alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginTop: 12
        },
        shervaniview: {
        paddingLeft:22,marginRight:22, height:150,width:140,alignContent:"center",alignItems:"center",borderLeftWidth:1,  borderColor: '#696969',marginTop: 12
        }
    }
);

export {customerstyles}