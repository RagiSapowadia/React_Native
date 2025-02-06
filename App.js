import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// screens
// import Splash from './src/screens/splash';
import Login from './src/screens/login';
import Register from './src/screens/registration';
import MerchantHome from './src/screens/Merchant_Home';
import Address from './src/screens/Address';
import MerchantChat from './src/screens/Merchant_Chat';
import TailorChat from './src/screens/Tailor_Chat';
import TailorNotify from './src/screens/Tailor_Notify';
import MerchantCategory from './src/screens/Merchant_category';
import TailorCategory from './src/screens/Tailor_category';
import Profile_customer from './src/screens/profile_customer';
import Profile_tailor from './src/screens/profile_tailor';
import ProfileMerchant from './src/screens/profile_merchant';
import MerchantSearch from './src/screens/Merchant_Search';
import TailorSearch from './src/screens/Tailor_Search';
import DelAcc from './src/screens/DelAcc';
import MerchantNotify from './src/screens/MNotification';
import TailorHome from './src/screens/Tailor_Home';
import CustomerHome from './src/screens/Customer_Home';
import CustomerChat from './src/screens/Customer_Chat';
import CustomerCategory from './src/screens/Customer_category';
import CustomerSearch from './src/screens/Customer_Search';
import TailorOrder from './src/screens/Tailor_Order';
import Order from './src/screens/Order';
import BuyStitch from './src/screens/BuyStitch';
import Buy from './src/screens/Buy';
import Cart from './src/screens/Cart';
import Fabric_types from './src/screens/Fabric_Types';
import Girl_Outfit_Types from './src/screens/Girl_Outfit_Types';
import Boy_Outfit_Types from './src/screens/Boy_Outfit_Types';
import Order_types from './src/screens/Order_types';
import Edit_Info from './src/screens/EditInfo';
import ChangePassword from './src/screens/ChangePassword';
import Denim from './src/screens/Denim';
import Shirt from './src/screens/Shirt';
import TailorCart from './src/screens/Tailor_Cart';
import Lehanga from './src/screens/Lehanga';
import Maxi from './src/screens/Maxi';
import Sarara from './src/screens/Sarara';
import Kurti from './src/screens/Kurti';
import Patiyala from './src/screens/Patiyala';
import Silk from './src/screens/Silk';
import Jacket from './src/screens/Jacket';
import BellBottom from './src/screens/BellBottom';
import IndoWestern from './src/screens/IndoWestern';
import JumpSuit from './src/screens/JumpSuit';
import Blazer from './src/screens/Blazer';
import Shervani from './src/screens/Shervani';
import Boy_Blazer from './src/screens/Boy_Blazer';
import Trouser from './src/screens/Trouser';
import WaistCoat from './src/screens/WaistCoat';
import Kurta from './src/screens/Kurta';
import JodhpuriSuit from './src/screens/JodhpuriSuit';
import Koti from './src/screens/Koti';
import Chiffon from './src/screens/Chiffon';
import Satin from './src/screens/Satin';
import Cotton from './src/screens/Cotton';
import Georgette from './src/screens/Georgette';
import Poplin from './src/screens/Poplin';
import Velvet from './src/screens/Velvet';
import Wool from './src/screens/Wool';
import Organza from './src/screens/Organza';
import MaxiMeas from './src/screens/MaxiMeas';
import LehangaMeas from './src/screens/LehangaMeas';
import SararaMeas from './src/screens/SararaMeas';
import KurtaMeas from './src/screens/KurtaMeas';
import KotiMeas from './src/screens/KotiMeas';
import KurtiMeas from './src/screens/KurtiMeas';
import PatiyalaMeas from './src/screens/PatiyalaMeas';
import JacketMeas from './src/screens/JacketMeas';
import IndoWesternMeas from './src/screens/IndoWesternMeas';
import BellBottomMeas from './src/screens/BellBottomMeas';
import JumpSuitMeas from './src/screens/JumpSuitMeas';
import BlazerMeas from './src/screens/BlazerMeas';
import ShirtMeas from './src/screens/ShirtMeas';
import ShervaniMeas from './src/screens/ShervaniMeas';
import BoyBlazerMeas from './src/screens/Boy_BlazerMeas';
import TrouserMeas from './src/screens/TrouserMeas';
import WaistCoatMeas from './src/screens/WaistCoatMeas';
import JodhpuriSuitMeas from './src/screens/JodhpuriSuitMeas';
import Tailor_Fabric_types from './src/screens/Tailor_Fabric_Types';
import FindTailor from './src/screens/FindTailor';
import FindMerchant from './src/screens/FindMerchant';
import TChangePassword from './src/screens/TChangePassword';
import MChangePassword from './src/screens/MChangePassword';
import TProductInfo from './src/screens/TProductInfo';
import MProductInfo from './src/screens/MProductInfo';
const AppNavigator = createStackNavigator({
  // Splash: {screen: Splash, navigationOptions: ({ navigation }) => ({
  //   headerShown: false,
  // })},
  Login: {screen: Login, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  TProductInfo: {screen: TProductInfo, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  MProductInfo: {screen: MProductInfo, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  TailorOrder: {screen: TailorOrder, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  FindMerchant: {screen: FindMerchant, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  TChangePassword: {screen: TChangePassword, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  MChangePassword: {screen: MChangePassword, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  FindTailor: {screen: FindTailor, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Address: {screen: Address, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Denim: {screen: Denim, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Register: {screen: Register, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Boy_Outfit_Types: {screen: Boy_Outfit_Types, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  MerchantHome: {screen: MerchantHome, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Tailor_Fabric_types: {screen: Tailor_Fabric_types, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  TailorNotify: {screen: TailorNotify, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Order_types: {screen: Order_types, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Fabric_types: {screen: Fabric_types, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Maxi: {screen: Maxi, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  MerchantSearch: {screen: MerchantSearch, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  TailorSearch: {screen: TailorSearch, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  TailorCart: {screen: TailorCart, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  DelAcc: {screen: DelAcc, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Girl_Outfit_Types: {screen: Girl_Outfit_Types, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  BuyStitch: {screen: BuyStitch, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  MerchantChat: {screen: MerchantChat, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  TailorChat: {screen: TailorChat, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  MerchantCategory: {screen: MerchantCategory, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  TailorCategory: {screen: TailorCategory, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  CustomerCategory: {screen: CustomerCategory, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  CustomerChat: {screen: CustomerChat, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  CustomerSearch: {screen: CustomerSearch, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Profile_customer: {screen: Profile_customer, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Profile_tailor: {screen: Profile_tailor, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  ProfileMerchant: {screen: ProfileMerchant, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  MerchantNotify: {screen: MerchantNotify, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  TailorHome: {screen: TailorHome, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  CustomerHome: {screen: CustomerHome, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Order: {screen: Order, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Cart: {screen: Cart, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Buy: {screen: Buy, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Shirt: {screen: Shirt, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Edit_Info: {screen: Edit_Info, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Sarara: {screen: Sarara, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Kurti: {screen: Kurti, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Patiyala: {screen: Patiyala, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Jacket: {screen: Jacket, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  BellBottom: {screen: BellBottom, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  IndoWestern: {screen: IndoWestern, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  JumpSuit: {screen: JumpSuit, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Blazer: {screen: Blazer, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Boy_Blazer: {screen: Boy_Blazer, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Shervani: {screen: Shervani, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Trouser: {screen: Trouser, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  WaistCoat: {screen: WaistCoat, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Kurta: {screen: Kurta, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  JodhpuriSuit: {screen: JodhpuriSuit, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Koti: {screen: Koti, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Cotton: {screen: Cotton, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Poplin: {screen: Poplin, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Satin: {screen: Satin, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Georgette: {screen: Georgette, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Wool: {screen: Wool, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Silk: {screen: Silk, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Velvet: {screen: Velvet, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Organza: {screen: Organza, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Chiffon: {screen: Chiffon, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  Lehanga: {screen: Lehanga, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  ChangePassword: {screen: ChangePassword, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  LehangaMeas: {screen: LehangaMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  SararaMeas: {screen: SararaMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  KurtaMeas: {screen: KurtaMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  KurtiMeas: {screen: KurtiMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  PatiyalaMeas: {screen: PatiyalaMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  JacketMeas: {screen: JacketMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  IndoWesternMeas: {screen: IndoWesternMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  BellBottomMeas: {screen: BellBottomMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  JumpSuitMeas: {screen: JumpSuitMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  BlazerMeas: {screen: BlazerMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  ShirtMeas: {screen: ShirtMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  BoyBlazerMeas: {screen: BoyBlazerMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  ShervaniMeas: {screen: ShervaniMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  TrouserMeas: {screen: TrouserMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  WaistCoatMeas: {screen: WaistCoatMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  JodhpuriSuitMeas: {screen: JodhpuriSuitMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  KotiMeas: {screen: KotiMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
  MaxiMeas: {screen: MaxiMeas, navigationOptions: ({ navigation }) => ({
    headerShown: false,
  })},
});
  const NavApp = createAppContainer(AppNavigator);
class App extends React.Component {
    render(){

        return(
            <NavApp/>
        );
    }
}
export default App;