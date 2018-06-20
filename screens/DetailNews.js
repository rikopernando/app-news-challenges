import React from 'react'
import { Text } from 'react-native'

export default class DetailNews extends React.Component {

    static navigationOptions = {
        title : 'Detail'
    }

    constructor(props){
        super(props)
    }
    
    render(){
        const title = this.props.navigation.getParam('title')
        return <Text> { title } </Text>
    }
}
