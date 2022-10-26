import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Pedidos from '../screen/Pedidos';
import Mapa from '../screen/Mapa';
import Choferes from '../screen/Choferes';
import Tiendas from '../screen/Tiendas';
import Estadisticas from '../screen/Estadisticas';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyDrawerHome = () => {
    return (
        <Drawer.Navigator>

            <Drawer.Screen
                name="Home"
                component={Pedidos}
                options={{
                    headerTintColor: 'white',
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <Image
                            style={{ height: 35 }}
                            source={require('../assets/image/prontoflex-logo.png')}
                            resizeMode='contain'
                        />
                    ),
                    headerRight: () => (
                        <SimpleLineIcons
                            name="options-vertical"
                            size={24}
                            color="white"
                            style={{
                                padding: 15
                            }}
                        />
                    ),
                }}
            />

        </Drawer.Navigator>
    );
}

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Pedidos"
            screenOptions={{
                tabBarActiveTintColor: '#0F1E46',
                tabBarInactiveTintColor: 'white',
                tabBarActiveBackgroundColor: 'white',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#0F1E46',
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Mapa"
                component={Mapa}
                options={{
                    tabBarLabel: 'Mapa',
                    tabBarIcon: ({ color, size }) => (

                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <MaterialCommunityIcons name="truck" color={color} size={size} />
                            <Text style={{
                                color: color
                            }}>Mapa</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Choferes"
                component={Choferes}
                options={{
                    tabBarLabel: 'Choferes',
                    tabBarIcon: ({ color, size }) => (

                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <MaterialCommunityIcons name="home-variant" color={color} size={size} />
                            <Text style={{
                                color: color
                            }}>Choferes</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Pedidos"
                component={MyDrawerHome}
                options={{
                    tabBarActiveBackgroundColor: '#0F1E46',
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 90,
                            height: 90,
                            marginBottom: 20,
                            backgroundColor: '#D9D9D9',
                            borderRadius: 50,
                        }}>
                            <MaterialIcons name="fact-check" size={size} style={{
                                color: focused ? '#0F1E46' :  '#979797'
                            }} />
                            <Text style={{
                                color: focused ? '#0F1E46' :  '#979797'
                            }}>Pedidos</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Tiendas"
                component={Tiendas}
                options={{
                    tabBarLabel: 'Tiendas',
                    tabBarIcon: ({ color, size }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <MaterialIcons name="add-business" color={color} size={size} />
                            <Text style={{
                                color: color
                            }}>Tiendas</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Estadisticas"
                component={Estadisticas}
                options={{
                    tabBarLabel: 'Estadisticas',
                    tabBarIcon: ({ color, size }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <MaterialIcons name="analytics" color={color} size={size} />
                            <Text style={{
                                color: color
                            }}>Estadisticas</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const AppStack = () => {

    return (
        <Stack.Navigator
            useLegacyImplementation
            initialRouteName="Home"
        >

            <Stack.Screen
                name="HomeTabs"
                component={MyTabs}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({
    btnWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    activeBtn: {
        flex: 1,
        position: 'absolute',
        top: -22,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
    },
    inactiveBtn: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgGapFiller: {
        flex: 1,
        backgroundColor: 'black',
    },
});