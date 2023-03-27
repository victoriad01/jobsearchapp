import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const About = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>About this role</Text>
      <ScrollView>
        <Text style={styles.text}>{data}</Text>
      </ScrollView>
    </ScrollView>
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
