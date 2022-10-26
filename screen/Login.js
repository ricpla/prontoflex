import React, { useState, useContext } from 'react'
import {
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native'
import ImageBg from '../assets/image/loginBg.png'
import Logo from '../assets/image/prontoflex-logo.png'
import { useNavigation } from "@react-navigation/native";
import Pedidos from './Pedidos'

const Login = ({ setUserToken }) => {

    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

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
                            <Image
                                source={Logo}
                                style={{
                                    marginBottom: 15
                                }}
                            />
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 50,
                                textAlign: 'center',
                                marginBottom: 15,
                            }}>Iniciar Sesión</Text>
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

                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <View>
                                    <Text style={{
                                        color: 'black',
                                        fontWeight: '600',
                                        fontSize: 18,
                                    }}>Correo Electrónico</Text>
                                    <TextInput
                                        placeholder="Ingresá tu correo"
                                        style={styles.input}
                                        autoCapitalize='none'
                                        onChangeText={text => setUser(text)}
                                    />
                                </View>
                                <View>
                                    <Text style={{
                                        color: 'black',
                                        fontWeight: '600',
                                        fontSize: 18,
                                    }}>Contraseña</Text>
                                    <TextInput
                                        placeholder="Ingresá tu contraseña"
                                        style={styles.input}
                                        secureTextEntry
                                        autoCapitalize='none'
                                        onChangeText={text => setPassword(text)}
                                    />
                                </View>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: "row",
                                    justifyContent: 'space-between',
                                    width: '70%',
                                    marginTop: 10
                                }}>
                                    <Text style={{
                                        color: '#ADADAD',
                                        fontSize: 12
                                    }}>
                                        Recordar datos
                                    </Text>
                                    <Text style={{
                                        color: '#ADADAD',
                                        fontSize: 12
                                    }}>
                                        Olvide la contraseña
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#6B53DD',
                                        margin: 30,
                                        padding: 20,
                                        width: '70%',
                                        borderRadius: 50
                                    }}
                                    onPress={() => {
                                        setUserToken(true)
                                    }}
                                >
                                    <Text style={{
                                        color: 'white',
                                        textAlign: 'center',
                                        fontWeight: 'bold'
                                    }}>Ingresar</Text>
                                </TouchableOpacity>

                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                }}>
                                    <Text style={{
                                        color: 'Black',
                                        textAlign: 'center'
                                    }}>¿Eres nuevo? Solicita tu cuenta </Text>
                                    <TouchableOpacity
                                        onPress={() => { }}
                                    >
                                        <Text style={{
                                            color: '#6B53DD',
                                            textAlign: 'center',
                                            fontWeight: 'bold'
                                        }}>aquí</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>


                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
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

export default Login