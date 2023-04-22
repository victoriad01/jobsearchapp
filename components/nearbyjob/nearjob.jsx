import { Image } from 'react-native'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { popular_jobs } from '../data'
import { useNavigation } from '@react-navigation/native'

export const Nearjob = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      {popular_jobs.map((job, index) => (
        <View key={job.id}>
          <Pressable
            style={styles.container2}
            onPress={() => {
              navigation.navigate('job', { params: { data: job } })
            }}
            key={job.id}
          >
            <Image source={job.logo} style={styles.logo_company} />
            <Text style={styles.job}>{job.job_title}</Text>
            <Text style={styles.text}>{job.location}</Text>
          </Pressable>
        </View>
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
    height: 100,
    width: 325,
    paddingHorizontal: 14,
    paddingVertical: 9,
    marginHorizontal: 16,
    marginVertical: 6,
  },
  job: { fontSize: 18, fontWeight: 700, marginTop: 4 },
  text: {
    fontSize: 12,
    color: 'gray',
    paddingBottom: 12,
  },
  logo_company: {
    height: 40,
    width: 40,
    objectFit: 'cover',
  },
})
