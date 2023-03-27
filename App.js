import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='/' component={Page} />
        <Stack.Screen name='job' component={Job} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
