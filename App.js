import React from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/Home'
import DetailNewsScreen from './screens/DetailNews'
import { Provider } from 'react-redux'
import store from './store'

const RootStack = createStackNavigator({
        
        Home : { screen : HomeScreen },
        DetailNews : { screen : DetailNewsScreen }
    },{
        initialRouteName : 'Home'
    })

export default class App extends React.Component {
    render(){
        return (
            <Provider store={ store }>
                <RootStack />
            </Provider>
       )
    }
}
