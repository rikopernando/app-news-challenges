import React from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/Home'
import DetailNewsScreen from './screens/DetailNews'

const RootStack = createStackNavigator({
        
        Home : { screen : HomeScreen },
        DetailNews : { screen : DetailNewsScreen }
    },{
        initialRouteName : 'Home'
    })

export default RootStack
