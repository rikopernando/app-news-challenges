import React from 'react'
import DetailNewsComponent from '../components/DetailNews'

export default class DetailNews extends React.Component {

    static navigationOptions = {
        title : 'Detail News'
    }

    constructor(props){
        super(props)
    }
    
    render(){

        const item = this.props.navigation.getParam('items')
        
        return <DetailNewsComponent item={item}> </DetailNewsComponent>
    }
}
