import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'

const RenderItem = (props) => {
    
    const { item, styles, navigate } = props

    return(
        <TouchableOpacity style={styles.renderItem}
            onPress={ () => navigate('DetailNews',{
                        items : item,
                    }
                )}>

            <Image 
            style={styles.img}
            source={{ uri: item.urlToImage }} />
            
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.titleNews}> { item.title } </Text>
            </View>

        </TouchableOpacity>
        )
}

export default RenderItem
