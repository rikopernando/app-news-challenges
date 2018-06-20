import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Moment from 'moment'

export default class DetailNews extends React.Component {

    constructor(props){
        super(props)
    }
    
    render(){

        const item = this.props.item
        Moment.locale('en')
        const publishNews = Moment(item.publishedAt).format("MMM Do YY")

        return(
          <View style={styles.container} >
              <View style={{ flex:1 }}>
                 
                <Image 
                style={styles.image}
                source={{ uri: item.urlToImage }} />

                <Text style={styles.source}> { item.source.name } - { publishNews } </Text>

                <Text style={styles.title} > { item.title } </Text>

                <Text style={{ margin: 5 }} > { item.description } </Text>

            </View>
          </View>
          )
    }
}

const styles = StyleSheet.create({
    container : { flex: 1, backgroundColor: '#F5F5FF', margin : 5 },
    image : { margin : 5 , height:200 },
    source : { fontSize : 9, margin : 5 },
    title : { fontSize : 20, margin: 5, fontWeight: 'bold' } 
})
