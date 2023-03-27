import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native'

import { Link } from 'expo-router'

import { stylesHome } from '.'
import SVG from '../assets/arrow-left.svg'
import MenuSVG from '../assets/menu.svg'
import SearchSVG from '../assets/search.svg'
import { TextInput } from 'react-native-gesture-handler'
import { Popularjob } from '../components/popularjob/popularjob'
import { Nearjob } from '../components/nearbyjob/nearjob'

const Home = () => {
  const job_type = [{ job: 'Remote' }, { job: 'Hybrid' }, { job: 'Onsite' }]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.gohome}>
          <Link href='/'>
            <View>
              <MenuSVG width={30} height={30} />
            </View>
          </Link>
        </View>
        <View>
          <Image
            source={require('../assets/images/dp.jpg')}
            style={styles.dp}
          />
        </View>
      </View>
      <View style={styles.namesection}>
        <Text style={styles.hello}>Hello, Victor</Text>
        <Text style={styles.findjob}>Find your desired job!</Text>
      </View>
      <View style={styles.searchview}>
        <TextInput
          placeholder='Search for jobs here...'
          color='white'
          style={styles.search}
        />
        <View>
          <SearchSVG width={25} height={25} />
        </View>
      </View>

      <View style={styles.press_job_type}>
        {job_type.map((job, index) => (
          <View key={index}>
            <Pressable>
              <Text style={styles.job}>{job.job}</Text>
            </Pressable>
          </View>
        ))}
      </View>
      <View>
        <View style={styles.popularshow}>
          <Text style={styles.popular}>Popular jobs</Text>
          <Text style={styles.showall}>Show all</Text>
        </View>
      </View>
      <Popularjob />
      <View>
        <View style={styles.popularshow}>
          <Text style={styles.popular}>Nearby jobs</Text>
          <Text style={styles.showall}>Show all</Text>
        </View>
      </View>
      <Nearjob />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  // #E6E4E6 #312651
  container: { marginTop: 50, backgroundColor: 'white' },
  navbar: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  gohome: {
    // backgroundColor: '#E6E4E6',
    // paddingHorizontal: 86,
    paddingVertical: 9,
    borderRadius: 4,
    color: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
  dp: {
    height: 50,
    width: 50,
    objectFit: 'cover',
    borderRadius: 50,
    marginRight: 16,
  },
  namesection: {
    marginHorizontal: 16,
    marginTop: 28,
    marginBottom: 16,
    gap: 6,
  },
  hello: {
    color: 'gray',
  },
  findjob: {
    color: '#312651',
    fontSize: 18,
    fontWeight: 700,
  },
  searchview: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E6E4E6',
    paddingVertical: 3,
    paddingHorizontal: 12,
    color: 'white',
    borderRadius: 6,
  },
  search: {
    backgroundColor: '#E6E4E6',
    padding: 8,
    color: 'white',
    flex: 2,
  },

  job_type: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 12,
  },

  press_job_type: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 12,
    gap: 9,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  job: {
    borderColor: '#83829A',
    color: '#312651',
    borderWidth: 0.5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 24,
    fontSize: 12,
  },
  popularshow: {
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  popular: { fontWeight: 700, color: '#312651' },
  showall: {
    color: '#83829A',
    fontSize: 12,
  },
})
