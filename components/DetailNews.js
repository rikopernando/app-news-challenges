import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Moment from 'moment'
import { connect } from 'react-redux'

class DetailNews extends React.Component {

    render(){
 
        const item = this.props.redux.berita.filter(berita => berita.title === this.props.title)
        Moment.locale('en')
        const publishNews = Moment(item[0].publishedAt).format("MMM Do YY")

        return(
          <View style={styles.container} >
              <View style={{ flex:1 }}>
                 
                <Image 
                    style={styles.image}
                    source={{ uri: item[0].urlToImage }} />

               <Text style={styles.source}> { item[0].source.name } - { publishNews } </Text>

               <Text style={styles.title} > { item[0].title } </Text>

               <Text style={{ margin: 5 }} > { item[0].description } </Text>

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

const mapStateToProps = (state) => {
    return {
        redux : state
    }
}

export default connect(mapStateToProps)(DetailNews)
