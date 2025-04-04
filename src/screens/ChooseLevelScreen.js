import React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { completeLevel } from '../redux/levelsSlice';
import ChevronBack from '../assets/svg/ChevronBack';

const backgroundMap = {
    1: require('../assets/img/gamebg1.png'),
    2: require('../assets/img/gamebg2.png'),
    3: require('../assets/img/gamebg3.png'),
    4: require('../assets/img/gamebg4.png'),
    5: require('../assets/img/gamebg5.png'),
};


const ChooseLevelScreen = ({ navigation }) => {
    const levels = useSelector(state => state.levels.levels);
    const dispatch = useDispatch();

    const selectedBackgroundId = useSelector(state => state.selectedBackground.selectedBackgroundId);
    const backgroundImage = backgroundMap[selectedBackgroundId] || require('../assets/img/gamebg1.png');


    return (
        <ImageBackground
            source={backgroundImage}
            style={{ flex: 1, alignItems: 'center', paddingTop: '15%', justifyContent: 'space-around' }}
            resizeMode="cover"
        >
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 24, top: 50, flexDirection: 'row', alignItems: 'center', zIndex: 1 }}>
                <ChevronBack />
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                    Back
                </Text>
            </TouchableOpacity>

            <ScrollView style={{ width: '100%', paddingTop: 70 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#AD00E9',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        width: '90%',
                        borderColor: '#fff',
                        borderWidth: 3,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        marginBottom: 52
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 12 }}>
                        Choose level
                    </Text>
                </TouchableOpacity>

                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    {Array.from({ length: 10 }, (_, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                if (levels[index]) {
                                    navigation.navigate(`GameDesc`, {level: index + 1});
                                }
                            }}
                            style={{
                                backgroundColor: levels[index] ? '#FF8AFF' : '#888', // Открытые уровни - розовые, закрытые - серые
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '90%',
                                borderColor: '#fff',
                                borderWidth: 3,
                                borderTopLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                marginBottom: 16,
                                opacity: levels[index] ? 1 : 0.5 // Закрытые уровни более тусклые
                            }}
                        >
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 10 }}>
                                Level {index + 1} {levels[index] ? '✅' : '🔒'}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{ marginBottom: 50 }} />
            </ScrollView>
        </ImageBackground>
    );
};

export default ChooseLevelScreen;

