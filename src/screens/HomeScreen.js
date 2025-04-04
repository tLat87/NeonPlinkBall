import React from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';


const backgroundMap = {
    1: require('../assets/img/gamebg1.png'),
    2: require('../assets/img/gamebg2.png'),
    3: require('../assets/img/gamebg3.png'),
    4: require('../assets/img/gamebg4.png'),
    5: require('../assets/img/gamebg5.png'),
};

const HomeScreen = ({ navigation }) => {
    const balance = useSelector(state => state.balance.balance);
    const selectedBackgroundId = useSelector(state => state.selectedBackground.selectedBackgroundId);
    const backgroundImage = backgroundMap[selectedBackgroundId] || require('../assets/img/gamebg1.png');

    return (
        <ImageBackground
            source={backgroundImage}
            style={{ flex: 1, alignItems: 'center', paddingTop: '30%', justifyContent: 'space-around' }}
            resizeMode="cover"
        >
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ChooseLevel');
                }}
                style={{
                    backgroundColor: '#FF8AFF',
                    position: 'absolute',
                    top:70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                    borderColor: '#fff',
                    borderWidth: 3,
                    zIndex: 1,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }}
            >
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                    💎{balance}
                </Text>
            </TouchableOpacity>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/img/g21.png')} style={{ width: '100%', position: 'absolute'  }} />
                <Image source={require('../assets/img/ball6.png')} style={{ width: 150, height: 150, position: 'absolute'  }} />
            </View>

            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ChooseLevel');
                    }}
                    style={{
                        backgroundColor: '#AD00E9',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '90%',
                        borderColor: '#fff',
                        borderWidth: 3,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        marginBottom: 24
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                        Play
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('Shop');}}
                    style={{
                        backgroundColor: '#AD00E9',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '90%',
                        borderColor: '#fff',
                        borderWidth: 3,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        marginBottom: 24
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                        Shop
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('About');}}
                    style={{
                        backgroundColor: '#AD00E9',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '90%',
                        borderColor: '#fff',
                        borderWidth: 3,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        marginBottom: 24
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                        about
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('Settings');}}
                    style={{
                        backgroundColor: '#AD00E9',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '90%',
                        borderColor: '#fff',
                        borderWidth: 3,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        marginBottom: 24
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                        settings
                    </Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/img/g7.png')} style={{ width: '100%', position: 'absolute', bottom: 0 }} />

        </ImageBackground>
    );
};

export default HomeScreen;
