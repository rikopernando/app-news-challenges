import React from 'react'
import { StyleSheet, View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity} from 'react-native'
import styles from '../styles/Home'
import axios from 'axios'
import RenderItem from './RenderItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setBerita } from '../store/actions' 

class Home extends React.Component {

  renderItem = ({item}) => {
      return <RenderItem item={item} navigate={this.props.navigate} styles={styles} />
  }

  renderSeparator = () => {
    return (
            <View 
                style={styles.renderSeparator}>
            </View>
            )
  }
  
  componentDidMount() {

    const url = 'https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=faa93d5c650945a6a34a760fac8c7f90' 

    axios.get(url)
    .then(resp => {
        console.log('succces')
        console.log(resp.data.articles)       
        this.props.setBerita(resp.data.articles)
    })
    .catch(err => {
        console.log(err)
    })

  }

  render() {
    console.log(this.props)
    return (
      this.props.redux.isLoading 
      ?
         <View style={styles.loading}>
            <ActivityIndicator size='large' color='#330066' animating />
         </View>
      :
          <View style={styles.container}>
            <FlatList
              data={this.props.redux.berita}
              renderItem={this.renderItem}
              keyExtractor={(item,index) => index.toString()}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        redux : state
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setBerita}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
