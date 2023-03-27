import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import ArrowSVG from '../assets/arrow-left.svg'
import { About } from '../components/job/About'
import { Qual } from '../components/job/Qual'
import { Resp } from '../components/job/Resp'

export default function Job() {
  const route = useRoute()
  const router = useRouter()

  const { data } = route.params.params

  const [navstyle, setNavstyle] = useState({
    about: true,
    qual: false,
    resp: false,
  })

  const HandleRoles = () => {
    setNavstyle({ about: true, qual: false, resp: false })
  }

  const HandleResp = () => {
    setNavstyle({ about: false, qual: false, resp: true })
  }

  const HandleQual = () => {
    setNavstyle({ about: false, qual: true, resp: false })
  }

  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.container1}>
        <View style={styles.nav}>
          <Pressable style={styles.navArrow} onPress={() => router.back()}>
            <ArrowSVG width={25} height={25} />
          </Pressable>
          <Pressable
            style={styles.navArrow}
            onPress={() => console.log('To share')}
          >
            <Image
              source={require('../assets/share.png')}
              width={25}
              height={25}
              style={styles.shareIcon}
            />
          </Pressable>
        </View>
        <View style={styles.imageside}>
          <Image source={data.logo} style={styles.image} />
          <Text style={styles.job_title}>{data.job_title}</Text>
          <Text style={styles.location}>
            {data.company} | {data.location}
          </Text>
          <Text></Text>
        </View>

        <View style={styles.tab}>
          <Text
            onPress={HandleRoles}
            style={navstyle.about ? styles.active : ''}
          >
            About
          </Text>
          <Text onPress={HandleQual} style={navstyle.qual ? styles.active : ''}>
            Qualifications
          </Text>
          <Text onPress={HandleResp} style={navstyle.resp ? styles.active : ''}>
            Responsibilities
          </Text>
        </View>

        <ScrollView>
          {navstyle.about ? <About data={data.about} /> : ''}
          {navstyle.qual ? <Qual data={data.role} /> : ''}
          {navstyle.resp ? <Resp data={data.resp} /> : ''}
        </ScrollView>
      </ScrollView>
      <Pressable style={styles.container2}>
        <Text style={styles.buttonText}>Apply Now!</Text>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 34,
    flex: 1,
    height: 100,
  },
  container1: { flex: 3 },

  nav: {
    marginVertical: 24,
    margin: 18,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  navArrow: {
    backgroundColor: '#E6E4E6',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  shareIcon: {
    height: 25,
    width: 25,
  },

  imageside: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },

  image: {
    height: 120,
    width: 120,
  },

  job_title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  location: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 8,
  },

  tab: {
    flexDirection: 'row',
    marginHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 12,
  },

  active: {
    borderRadius: 25,
    borderColor: '#312651',
    backgroundColor: '#312651',
    borderWidth: 1,
    color: '#E6E4E6',
    paddingHorizontal: 16,
    paddingVertical: 6,
    fontWeight: 600,
  },

  button: { paddingVertical: 28, backgroundColor: '#312651' },

  container2: { flex: 1, paddingVertical: 36, backgroundColor: '#312651' },

  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 700,
  },
})
