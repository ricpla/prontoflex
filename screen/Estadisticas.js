import React from 'react'
import { View, Button } from 'react-native'

const Estadisticas = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
      />
    </View>
  )
}

export default Estadisticas