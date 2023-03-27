import { Link } from 'expo-router'
import { Image, Pressable } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native'

import { popular_jobs } from '../data'

export const Popularjob = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.container} horizontal={true}>
      {popular_jobs.slice(7, 12).map((job, index) => (
        <Pressable
          style={styles.container2}
          onPress={() => {
            navigation.navigate('job', { params: { data: job } })
          }}
          key={job.id}
        >
          <View>
            <Image source={job.logo} style={styles.logo_company} />
            <Text style={styles.text}>{job.company}</Text>
            <Text style={styles.job}>{job.job_title}</Text>
            <Text style={styles.text}>{job.location}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  container2: {
    borderColor: '#E6E4E6',
    backgroundColor: '#E6E4E6',
    borderWidth: 1,
    borderRadius: 6,
    height: 214,
    width: 200,
    paddingHorizontal: 12,
    paddingTop: 12,
    marginHorizontal: 16,
    marginVertical: 12,
  },

  job: { fontSize: 16, fontWeight: 700 },

  text: {
    fontSize: 12,
    color: 'gray',
    paddingBottom: 12,
  },
  logo_company: {
    height: 90,
    width: 90,
    objectFit: 'cover',
    borderRadius: 6,
    marginBottom: 4,
  },
})
