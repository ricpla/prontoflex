import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import AppStack from './AppStack'

const AppNav = () => {

    const [userToken, setUserToken] = useState(null)

    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack /> : <AuthStack setUserToken={setUserToken} />}
        </NavigationContainer >
    )
}


export default AppNav