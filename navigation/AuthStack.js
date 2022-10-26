import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screen/Login'

const Stack = createStackNavigator()

const AuthStack = ({ setUserToken }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login">
                {(props) => <Login {...props} setUserToken={setUserToken} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthStack