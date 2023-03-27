import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Link } from 'expo-router'
import { Pressable } from 'react-native'

export default function Page() {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View style={stylesHome.container}>
        <View style={stylesHome.welcomeView}>
          <View style={stylesHome.jsstyle}>
            <Text style={{ color: '#312651', fontSize: 57 }}>Js</Text>
          </View>
          <Text style={stylesHome.welcome}>Welcome to Job Search</Text>
          <Text style={stylesHome.hello}>Hello, kindly fill in to sign up</Text>
        </View>

        <View style={stylesHome.inputContainer}>
          <View>
            <TextInput
              placeholder='Enter Email'
              placeholderTextColor='#E6E4E6'
              selectionColor='#E6E4E6'
              style={stylesHome.inputTouch}
            />
            <TextInput
              placeholder='Enter Phone Number'
              placeholderTextColor='#E6E4E6'
              style={stylesHome.inputTouch}
            />
            <TextInput
              placeholder='Enter Address'
              placeholderTextColor='#E6E4E6'
              style={stylesHome.inputTouch}
            />
            <TextInput
              placeholder='Enter Password'
              placeholderTextColor='#E6E4E6'
              style={stylesHome.inputTouch}
            />
          </View>

          <Pressable
            style={stylesHome.signupTouch}
            onPress={() => navigation.navigate('home')}
          >
            <Text style={stylesHome.textColor}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export const stylesHome = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#312651',
    height: '100%',
    width: '100%',
  },
  welcomeView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },

  jsstyle: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    // borderColor: '#E6E4E6',
    backgroundColor: '#E6E4E6',
    borderWidth: 0.5,
    marginBottom: 26,
  },
  welcome: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
    color: 'white',
  },
  hello: { color: '#E6E4E6', marginTop: 12 },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  inputTouch: {
    borderWidth: 1,
    borderColor: '#E6E4E6',
    color: '#E6E4E6',
    paddingHorizontal: 56,
    paddingVertical: 12,
    margin: 8,
    borderRadius: 4,
  },
  input: {},
  textColor: {
    color: '#312651',
    fontWeight: 700,
    fontSize: 18,
  },
  signupTouch: {
    backgroundColor: '#E6E4E6',
    paddingHorizontal: 86,
    paddingVertical: 18,
    marginTop: 18,
    borderRadius: 4,
  },
})
