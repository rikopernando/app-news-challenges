import React from 'react'
import { StyleSheet, View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity} from 'react-native'
import styles from '../styles/Home'
import axios from 'axios'

export default class Home extends React.Component {

  constructor(){
    super()
    this.state = {
       berita : [],
       isLoading : true
    }
  }

  renderItem = ({item}) => {
      return(
        <TouchableOpacity style={styles.renderItem}
            onPress={ () => this.props.navigate('DetailNews')}>

            <Image 
            style={styles.img}
            source={{ uri: item.urlToImage }} />
            
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.titleNews}> { item.title } </Text>
            </View>

        </TouchableOpacity>
    )
  }

  renderSeparator = () => {
    return (
            <View 
                style={styles.renderSeparator}> 
            </View>
            )
  }
  
  componentDidMount() {

    const url = 'https://newsapi.org/v2/everything?sources=bbc-sport&apiKey=faa93d5c650945a6a34a760fac8c7f90'
   
    axios.get(url)
    .then(resp => {
        console.log('succces')
        console.log(resp.data.articles)       
        this.setState({
            berita : resp.data.articles,
            isLoading : false
        })
    })
    .catch(err => {
        console.log(err)
    })

  }

  render() {
    return (
      this.state.isLoading 
      ?
         <View style={styles.loading}>
            <ActivityIndicator size='large' color='#330066' animating />
         </View>
      :
          <View style={styles.container}>
            <FlatList
              data={this.state.berita}
              renderItem={this.renderItem}
              keyExtractor={(item,index) => index.toString()}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
    );
  }
}

