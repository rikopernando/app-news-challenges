import React from 'react'
import DetailNewsComponent from '../components/DetailNews'

export default class DetailNews extends React.Component {

    static navigationOptions = {
        title : 'News App | Detail'
    }
    
    render(){

        const title = this.props.navigation.getParam('title')
        
        return <DetailNewsComponent title={title}> </DetailNewsComponent>
    }
}
