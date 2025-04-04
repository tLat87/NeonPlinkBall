import React, { useState } from 'react';
import {
    ImageBackground, Image, View, Text,
    TouchableOpacity, ScrollView, Dimensions, Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ChevronBack from '../assets/svg/ChevronBack';
import { buyItem } from '../redux/slices/purchasedItemsSlice';
import { subtractBalance } from '../redux/slices/money';
import {selectBackground} from '../redux/slices/selectedBackgroundSlice';

const { width } = Dimensions.get('window');

const backgroundMap = {
    1: require('../assets/img/gamebg1.png'),
    2: require('../assets/img/gamebg2.png'),
    3: require('../assets/img/gamebg3.png'),
    4: require('../assets/img/gamebg4.png'),
    5: require('../assets/img/gamebg5.png'),
};

const ShopScreen = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const dispatch = useDispatch();

    const selectedBackgroundId = useSelector(state => state.selectedBackground.selectedBackgroundId);
    const backgroundImage = backgroundMap[selectedBackgroundId] || require('../assets/img/gamebg1.png');


    const balance = useSelector(state => state.balance.balance);
    const purchasedItems = useSelector(state => state.purchasedItems.purchasedItems);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };

    const handleBuy = (item) => {
        if (balance >= item.price) {
            dispatch(buyItem(item.id));
            dispatch(subtractBalance(item.price));
        } else {
            Alert.alert('Not enough 💎');
        }
    };

    const handleSetBackground = (itemId) => {
        dispatch(selectBackground(itemId));
    };

    const items = [
        // { id: 1, price: 40, image: require('../assets/img/gamebg1.png') },
        { id: 2, price: 50, image: require('../assets/img/gamebg2.png') },
        { id: 3, price: 60, image: require('../assets/img/gamebg3.png') },
        { id: 4, price: 70, image: require('../assets/img/gamebg4.png') },
        { id: 5, price: 80, image: require('../assets/img/gamebg5.png') }
    ];

    return (
        <ImageBackground
            source={backgroundImage}
            style={{ flex: 1, alignItems: 'center', paddingTop: '40%' }}
            resizeMode="cover"
        >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    position: 'absolute',
                    left: 24,
                    top: 50,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <ChevronBack />
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                    Back
                </Text>
            </TouchableOpacity>

            {/* Верхняя панель */}
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-around' }}>
                <View
                    style={{
                        backgroundColor: '#AD00E9',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50%',
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
                </View>
                <View
                    style={{
                        backgroundColor: '#FFC2D7',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30%',
                        borderColor: '#fff',
                        borderWidth: 3,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        marginBottom: 24
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                        💎{balance}
                    </Text>
                </View>
            </View>

            {/* Горизонтальный список карточек */}
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={200}
                style={{ width: '100%', zIndex: 1 }}
            >
                {items.map((item) => {
                    const isOwned = purchasedItems.includes(item.id);
                    const isSelected = selectedBackgroundId === item.id;

                    return (
                        <View
                            key={item.id}
                            style={{
                                backgroundColor: isSelected ? '#AD00E9' : '#FFC2D7',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: width - 40,
                                marginLeft: 20,
                                marginRight: 20,
                                borderColor: '#fff',
                                borderWidth: 3,
                                borderTopLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                marginBottom: 24,
                                height: "70%",
                                zIndex: 99
                            }}
                        >
                            <Image source={item.image} style={{ width: '80%', height: '60%', borderRadius: 18, marginBottom: 22 }} />
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}>
                                💎{item.price}
                            </Text>

                            {isOwned ? (
                                <TouchableOpacity
                                    onPress={() => handleSetBackground(item.id)}
                                    style={{
                                        backgroundColor: isSelected ? '#00CC93' : '#FFC2D7',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '90%',
                                        borderColor: '#fff',
                                        borderWidth: 3,
                                        borderTopLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        marginTop: 24
                                    }}
                                >
                                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                                        {isSelected ? 'Selected' : 'Set Background'}
                                    </Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => handleBuy(item)}
                                    style={{
                                        backgroundColor: '#FFC2D7',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '90%',
                                        borderColor: '#fff',
                                        borderWidth: 3,
                                        borderTopLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        marginTop: 24
                                    }}
                                >
                                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                                        Buy
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    );
                })}
            </ScrollView>

            {/* Индикатор страницы */}
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 100, zIndex: 1 }}>
                {items.map((_, index) => (
                    <View
                        key={index}
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: index === activeIndex ? '#FF69B4' : '#fff',
                            marginHorizontal: 5
                        }}
                    />
                ))}
            </View>

            {/* Декоративное изображение внизу */}
            <Image source={require('../assets/img/g7.png')} style={{ width: '100%', position: 'absolute', bottom: 0 }} />
        </ImageBackground>
    );
};

export default ShopScreen;
