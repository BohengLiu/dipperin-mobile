import React from 'react'
import { View, StyleProp, TextStyle ,Text} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { defaultTabBarOptions } from './utils'
import CustomBack from './CustomBack'
import CustomIcon from "./CustomIcon"
import { Icon } from 'Components/Icon'



import Start from 'Pages/InitWallet/Start'
import Assets from 'Pages/Accounts/AssetsIndex'
import AddAccount from "Pages/Accounts/AddAccount"
import AccountDetail from "Pages/Accounts/AccountDetail"




import Apps from 'Pages/Discovery/Apps'


import Me from 'Pages/Me'
import Settings from 'Pages/Me/Settings'
import AboutUs from 'Pages/Me/AboutUs'
import HelpCenter from 'Pages/Me/HelpCenter'
import ChangePassword from 'Pages/Me/Settings/ChangePassword'
import ToggleLanguage from 'Pages/Me/Settings/ToggleLanguage'
import NodeChoose from 'Pages/Me/Settings/NodeChoose'
import Import from 'Pages/InitWallet/Import'

import i18n from 'I18n'

import HelpCenterDetail from 'Pages/Me/HelpCenter/HelpCenterDetail'
import FunctionIntr from 'Pages/Me/AboutUs/FunctionIntr'
import UserProtocol from 'Pages/Me/AboutUs/UserProtocol'

export const commonHeaderStyle = {
  shadowOpacity: 0,
  elevation: 0,
  borderBottomWidth: 0,
}

const commonHeaderBack = {
  headerLeft: <CustomBack />,
  headerRight: <View />,
}

// default headerTitle style
const defaultHeaderTitleStyle: StyleProp<TextStyle> = {
  flex: 1,
  alignSelf: 'center',
  textAlign: 'center',
  color: '#333',
  fontSize: 18,
  fontWeight: 'bold',
}

const headerBackConfig = {
  ...commonHeaderBack,
  headerStyle: {
    ...commonHeaderStyle,
    borderBottomColor: '#e5e5e6',
    borderBottomWidth: 1,
  },
  headerTitleStyle: defaultHeaderTitleStyle
}

const headerBackConfigNoBorder = {
  ...commonHeaderBack,
  headerStyle: commonHeaderStyle,
  headerTitleStyle: defaultHeaderTitleStyle
}

export const initWalletStack = createStackNavigator({
  start: {
    screen: Start,
    navigationOptions: () => ({
      header: null
    })
  },
  import: {
    screen: Import,
    navigationOptions: () => ({
      ...headerBackConfig,
      title: i18n.t('dipperin:start.import')
    })
  }
})

export const walletStack = createStackNavigator({
  Assets: {
    screen: Assets,
    navigationOptions: (props) => ({
      headerLeft:<View/>,
      headerRight:<CustomIcon onPress={()=>{props.navigation.navigate('AddAccount')}}><Icon name={'icon|tianjia'} size={25} color="#fff" /></CustomIcon>,
      headerStyle:{...commonHeaderStyle,backgroundColor: '#275DA5'},
      headerTitleStyle:{...defaultHeaderTitleStyle,color:"#fff"},
      title:'Wallet'
    })
  },
  AddAccount:{
    screen:AddAccount,
    navigationOptions:(props) => ({
      ...headerBackConfig,
      title: 'Add Account',
      headerRight:<CustomIcon onPress={props.navigation.getParam('addAccount')}><Text>确定</Text></CustomIcon>
    })
  },
  accountDetail:{
    screen:AccountDetail,
    navigationOptions:(props) => ({
      ...headerBackConfig,
      headerRight:<CustomIcon onPress={()=>{props.navigation.navigate('Scan')}}><Icon name={'icon|saoma'} size={20} color="##393B42"/></CustomIcon>,
      title: 'Dip'
    })
  },

})

export const discoveryStack = createStackNavigator({
  apps: {
    screen: Apps,
    navigationOptions: () => ({
      ...headerBackConfig,
    })
  }
})

export const meStack = createStackNavigator({
  me: {
    screen: Me,
    navigationOptions: () => ({
      header: null
    })
  },
  settings: {
    screen: Settings,
    navigationOptions: () => ({
      ...headerBackConfig,
      title: '设置'
    })
  },
  changePassword: {
    screen: ChangePassword,
    navigationOptions: () => ({
      header: null
    })
  },
  toggleLanguage: {
    screen: ToggleLanguage,
    navigationOptions: () => ({
      ...headerBackConfig,
      title: '语言切换'
    })
  },
  nodeChoose: {
    screen: NodeChoose,
    navigationOptions: () => ({
      ...headerBackConfig,
      title: '节点选择'
    })
  },
  aboutUs: {
    screen: AboutUs,
    navigationOptions: () => ({...headerBackConfigNoBorder})
  },
  functionIntr: {
    screen: FunctionIntr,
    navigationOptions: () => ({
      ...headerBackConfig,
      title: '功能介绍'
    })
  },
  userProtocol: {
    screen: UserProtocol,
    navigationOptions: () => ({
      ...headerBackConfig,
      title: '用户协议'
    })
  },
  helpCenter: {
    screen: HelpCenter,
    navigationOptions: () => ({
      ...headerBackConfig,
      title: '帮助中心'
    })
  },
  helpCenterDetail: {
    screen: HelpCenterDetail,
    navigationOptions: () => ({
      title: '帮助中心详情',
      ...headerBackConfig
    })
  }
}, {
  navigationOptions: defaultTabBarOptions
})



// hide tab 
export const hideTab = ({ navigation }: any) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
      tabBarVisible = false;
  }
  return {
      tabBarVisible,
  };
};
meStack.navigationOptions = hideTab
discoveryStack.navigationOptions = hideTab
walletStack.navigationOptions = hideTab