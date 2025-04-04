import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View, Switch } from 'react-native';
import ChevronBack from '../assets/svg/ChevronBack';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNotifications, setMusicVolume, setSoundVolume } from '../redux/slices/settingsSlice';

const backgroundMap = {
    1: require('../assets/img/gamebg1.png'),
    2: require('../assets/img/gamebg2.png'),
    3: require('../assets/img/gamebg3.png'),
    4: require('../assets/img/gamebg4.png'),
    5: require('../assets/img/gamebg5.png'),
};

const SettingsScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const {
        notificationsEnabled,
        musicVolume,
        soundVolume
    } = useSelector(state => state.settings);

    const selectedBackgroundId = useSelector(state => state.selectedBackground.selectedBackgroundId);
    const backgroundImage = backgroundMap[selectedBackgroundId] || require('../assets/img/gamebg1.png');

    return (
        <ImageBackground
            source={backgroundImage}
            style={{ flex: 1, alignItems: 'center', paddingTop: '10%', justifyContent: 'flex-start' }}
            resizeMode="cover"
        >
            {/* Кнопка "Back" */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ position: 'absolute', left: 24, top: 50, flexDirection: 'row', alignItems: 'center' }}
            >
                <ChevronBack />
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>Back</Text>
            </TouchableOpacity>

            {/* Заголовок */}
            <TouchableOpacity
                style={{
                    backgroundColor: '#AD00E9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                    borderColor: '#fff',
                    borderWidth: 3,
                    borderRadius: 20,
                    marginTop: 80,
                    paddingVertical: 16
                }}
            >
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 22 }}>SETTINGS</Text>
            </TouchableOpacity>


            {/* Громкость музыки */}
            <View style={{ width: '90%', marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: '#FFD700', fontSize: 18 }}>Music</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#FF69B4' }}
                    thumbColor={musicVolume > 0 ? '#fff' : '#f4f3f4'}
                    onValueChange={(value) => dispatch(setMusicVolume(value ? 0.5 : 0))}
                    value={musicVolume > 0}
                />
            </View>

            {/* Громкость звуков */}
            <View style={{ width: '90%', marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: '#FFD700', fontSize: 18 }}>Sounds</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#FF69B4' }}
                    thumbColor={soundVolume > 0 ? '#fff' : '#f4f3f4'}
                    onValueChange={(value) => dispatch(setSoundVolume(value ? 0.5 : 0))}
                    value={soundVolume > 0}
                />
            </View>

            {/* Декор внизу */}
            <Image source={require('../assets/img/g7.png')} style={{ width: '100%', position: 'absolute', bottom: 0 }} />
        </ImageBackground>
    );
};

export default SettingsScreen;
