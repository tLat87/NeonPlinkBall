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


const GameDesc = ({ navigation, route }) => {
    const selectedBackgroundId = useSelector(state => state.selectedBackground.selectedBackgroundId);
    const backgroundImage = backgroundMap[selectedBackgroundId] || require('../assets/img/gamebg1.png');

    const {level} = route.params;
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
            <View
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
                    marginTop: 50,
                }}
            >
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                    LEVEL {level}
                </Text>
            </View>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '60%'}}>
                <Image source={require('../assets/img/g21.png')} style={{ width: '100%', position: 'absolute'  }} />
                <Image source={require('../assets/img/ball6.png')} style={{ width: 100, height: 100, position: 'absolute', marginLeft: 200 }} />
                <Image source={require('../assets/img/ball7.png')} style={{ width: 100, height: 100, position: 'absolute',marginRight: 0   }} />
                <Image source={require('../assets/img/ball8.png')} style={{ width: 100, height: 100, position: 'absolute',marginRight: 200   }} />
            </View>
            <View style={{marginTop: 220}}>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, padding: 16, textAlign: 'center' }}>
                    The Lightfall awakens. Catch the glowing seeds of sync.
                </Text>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, padding: 16,  textAlign: 'center' }}>
                    Catch: {level * 10} balls
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('GameProccesScreen',  {level});
                }}
                style={{
                    backgroundColor: '#FF8AFF',
                    position: 'absolute',
                    bottom:70,
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
                    Play
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default GameDesc;
