import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const backgroundMap = {
    1: require('../assets/img/gamebg1.png'),
    2: require('../assets/img/gamebg2.png'),
    3: require('../assets/img/gamebg3.png'),
    4: require('../assets/img/gamebg4.png'),
    5: require('../assets/img/gamebg5.png'),
};

const MainScreen = ({ navigation }) => {
    const selectedBackgroundId = useSelector(state => state.selectedBackground.selectedBackgroundId);
    const backgroundImage = backgroundMap[selectedBackgroundId] || require('../assets/img/gamebg1.png');

    return (
        <LinearGradient
            colors={['#3000BB', '#FE2DFF']}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
        >
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/img/g21.png')} style={{ width: '100%', position: 'absolute', marginTop: 100 }} />
                <Image source={require('../assets/img/ball6.png')} style={{ width: 150, height: 150, marginTop: 200 }} />
            </View>

            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
                🌟 Welcome to Neon Plink Ball: Lightfall
            </Text>

            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'left', marginBottom: 40 }}>
                Enter the stream of light and memory 🌌{'\n'}
                {'\n'}
                Your mission is simple: 🎯{'\n'}
                🔁 Catch the right orbs{'\n'}
                🧠 Follow the sequence{'\n'}
                🎵 Master the rhythm
            </Text>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home');
                }}
                style={{
                    backgroundColor: '#AD00E9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                    borderColor: '#fff',
                    borderWidth: 3,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            >
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                    Start
                </Text>
            </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default MainScreen;
