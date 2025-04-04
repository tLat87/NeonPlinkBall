import React, { useEffect } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addBalance} from '../redux/slices/money';
import {completeLevel} from '../redux/slices/levelsSlice';

const backgroundMap = {
    1: require('../assets/img/gamebg1.png'),
    2: require('../assets/img/gamebg2.png'),
    3: require('../assets/img/gamebg3.png'),
    4: require('../assets/img/gamebg4.png'),
    5: require('../assets/img/gamebg5.png'),
};

const WinScreen = ({ navigation, route }) => {
    const { level } = route.params;
    const dispatch = useDispatch();

    const selectedBackgroundId = useSelector(state => state.selectedBackground.selectedBackgroundId);
    const backgroundImage = backgroundMap[selectedBackgroundId] || require('../assets/img/gamebg1.png');


    useEffect(() => {
        dispatch(completeLevel(level));
        dispatch(addBalance(level * 10));
    }, [dispatch, level]);

    return (
        <ImageBackground
            source={backgroundImage}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
            resizeMode="cover"
        >
            <View
                style={{
                    backgroundColor: '#00CC93',
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
                    Pattern Perfected
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 20, padding: 16, textAlign: 'center' }}>
                    You've reached harmony within the Lightfall.
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 20, padding: 16, textAlign: 'center' }}>
                    {level * 10}💎 points added — your memory shines brighter than ever.
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.pop(2)}
                    style={{
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '90%',
                        borderColor: '#fff',
                        borderWidth: 3,
                        zIndex: 1,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        marginBottom: 20,
                    }}
                >
                    <Text style={{ color: '#00CC93', fontSize: 20, padding: 16, textAlign: 'center' }}>
                        Exit to Menu
                    </Text>
                </TouchableOpacity>
            </View>

            <Image source={require('../assets/img/g7.png')} style={{ width: '100%', position: 'absolute', bottom: 0 }} />
        </ImageBackground>
    );
};

export default WinScreen;
