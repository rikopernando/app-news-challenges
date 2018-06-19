import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FF',
  },
  loading : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  renderSeparator : {
    height: 1,
    width: '100%',
    backgroundColor: 'black'
  },
  titleNews : {
    fontSize: 18,
    color: 'green',
    marginBottom: 15
  },
  img : {
    width: 100,
    height: 100,
    margin: 5
  },
  renderItem : {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 3
  }
});

export default styles
