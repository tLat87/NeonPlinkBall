import React from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ChevronBack from '../assets/svg/ChevronBack';
import {useSelector} from 'react-redux';

const backgroundMap = {
    1: require('../assets/img/gamebg1.png'),
    2: require('../assets/img/gamebg2.png'),
    3: require('../assets/img/gamebg3.png'),
    4: require('../assets/img/gamebg4.png'),
    5: require('../assets/img/gamebg5.png'),
};

const AboutScreen = ({ navigation }) => {
    const selectedBackgroundId = useSelector(state => state.selectedBackground.selectedBackgroundId);
    const backgroundImage = backgroundMap[selectedBackgroundId] || require('../assets/img/gamebg1.png');

    return (
        <ImageBackground
            source={backgroundImage}
            style={{ flex: 1, alignItems: 'center', paddingTop: '30%', justifyContent: 'flex-startd' }}
            resizeMode="cover"
        >
            <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position: 'absolute',  left: 24, top: 50, flexDirection: 'row', alignItems: 'center'}}>
                <ChevronBack/>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                    Back
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ChooseLevel');
                }}
                style={{
                    backgroundColor: '#AD00E9',
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
                    marginTop: 50,
                }}
            >
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                    About
                </Text>
            </TouchableOpacity>

            <View style={{marginTop: 60}}>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16, padding: 16 }}>
                    Neon Plink Ball: Lightfall is a memory-based arcade game wrapped in vibrant retro-futuristic visuals and smooth, glowing motion.
                </Text>

                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16, padding: 16 }}>
                    Your goal is simple: catch the right orbs, in the right order, with perfect timing and control.
                    With every level, the patterns grow more complex, the lights more intense, and the challenge more rewarding.
                </Text>

                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16, padding: 16 }}>
                    Test your focus. Sharpen your memory. Enjoy the flow.
                </Text>
            </View>

            <Image source={require('../assets/img/g7.png')} style={{ width: '100%', position: 'absolute', bottom: 0 }} />

        </ImageBackground>
    );
};

export default AboutScreen;
