import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Resp = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Responsibilities</Text>
      <Text style={styles.text}>{data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 26,
  },
  text: {
    color: 'gray',
    lineHeight: 30,
    textAlign: 'justify',
  },
  header: { fontWeight: 700, fontSize: 16, marginVertical: 16 },
})
