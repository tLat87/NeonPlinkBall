import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import MainScreen from "./src/screens/MainScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ChooseLevelScreen from "./src/screens/ChooseLevelScreen";
import ShopScreen from "./src/screens/ShopScreen";
import AboutScreen from "./src/screens/AboutScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import GameDesc from "./src/screens/GameDesc";
import GameProccesScreen from "./src/screens/GameProccesScreen";
import WinScreen from "./src/screens/WinScreen";

const Stack = createStackNavigator();

const leftCu = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {navigation.goBack()}} style={{marginLeft: 16, transform: [{scaleX: -1}]}}>

        </TouchableOpacity>
        )
    }

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    {/*<BackgroundMusic />*/}
                    <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: '#000000', },
                        headerLeft: leftCu,
                        headerTitle: () => (
                            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', width: '100%'}}>
                            {/*<Text>*/}
                            {/*    Wonders of Holland*/}
                            {/*</Text>*/}
                            </View>
                        ),
                        headerShadowVisible: false,
                    }}>

                        {/*<Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />*/}
                        {/*<Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />*/}
                        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="ChooseLevel" component={ChooseLevelScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="GameDesc" component={GameDesc} options={{ headerShown: false }} />
                        <Stack.Screen name="GameProccesScreen" component={GameProccesScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="WinScreen" component={WinScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
