import React from 'react'
import {
  StyleSheet,
  StatusBar,
} from 'react-native'
import { configure } from 'mobx'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'mobx-react'
import './ global' // for nodejs modules
import Router from 'Router'
import i18n from 'I18n'
import './ global' // for nodejs modules
import RootStore from 'Store/root'
import SplashScreen from 'react-native-splash-screen'

// Configure mobx
configure({
  enforceActions: 'observed'
})

const rootStore = new RootStore()

const App = () => {
  SplashScreen.hide()
  return (
    <I18nextProvider i18n={i18n}>
      <Provider {...rootStore}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
        <Router />
      </Provider>
    </I18nextProvider>
  )
}

const styles = StyleSheet.create({

})

export default App
