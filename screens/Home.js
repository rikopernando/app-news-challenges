import React from 'react'
import HomeComponent from '../components/Home'

export default class Home extends React.Component {

  static navigationOptions = {
    title : 'News App | Home'
  }

  render() {
      const { navigate } = this.props.navigation
      return <HomeComponent navigate={navigate}> </HomeComponent>
  }
}
