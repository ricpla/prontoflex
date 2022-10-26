import React from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';
import ImageBg from '../assets/image/loginBg.png'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Pedidos = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <StatusBar translucent backgroundColor="transparent" />

            <ImageBackground source={ImageBg} resizeMode="cover" style={styles.image}>
                <View>
                    <View>
                        <View style={{
                            alignItems: 'center',
                            marginTop: '18%'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 50,
                                textAlign: 'center',
                                marginBottom: 15,
                                marginTop: 30
                            }}>Lista de Pedidos</Text>
                            <Ionicons name="add" size={24} color="white" />
                            <MaterialIcons name="library-add" size={24} color="white" />
                        </View>

                        <View style={{
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: 'white',
                            height: '100%',
                            borderTopLeftRadius: 25,
                            borderTopRightRadius: 25,
                            paddingTop: 50
                        }}>


                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    input: {
        backgroundColor: '#EFF2F6',
        height: 50,
        width: 320,
        margin: 4,
        borderBottomWidth: 1,
        borderColor: '#ADADAD',
        padding: 5,
    },
});

export default Pedidos