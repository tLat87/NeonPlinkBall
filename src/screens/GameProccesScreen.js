import React, { useEffect, useRef, useState } from 'react';
import {
    Image,
    ImageBackground,
    View,
    Animated,
    Dimensions,
    PanResponder,
    Text,
    TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

const { width, height } = Dimensions.get('window');

const backgroundMap = {
    1: require('../assets/img/gamebg1.png'),
    2: require('../assets/img/gamebg2.png'),
    3: require('../assets/img/gamebg3.png'),
    4: require('../assets/img/gamebg4.png'),
    5: require('../assets/img/gamebg5.png'),
};

const GameProccesScreen = ({ navigation, route }) => {
    const basketX = useRef(new Animated.Value(width / 2 - 50)).current;
    const [balls, setBalls] = useState([]);
    const [score, setScore] = useState(0);
    const { level } = route.params;
    const intervalRef = useRef(null);

    const selectedBackgroundId = useSelector(state => state.selectedBackground.selectedBackgroundId);
    const backgroundImage = backgroundMap[selectedBackgroundId] || require('../assets/img/gamebg1.png');


    const ballTypes = [
        { type: 'ball6', src: require('../assets/img/ball6.png'), points: 1 },
        { type: 'ball7', src: require('../assets/img/ball7.png'), points: 2 },
        { type: 'ball8', src: require('../assets/img/ball8.png'), points: 3 }
    ];

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gesture) => {
                let newX = gesture.moveX - 75; // корзина 150px
                if (newX < 0) newX = 0;
                if (newX > width - 150) newX = width - 150;
                basketX.setValue(newX);
            },
        })
    ).current;

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const randomType = ballTypes[Math.floor(Math.random() * ballTypes.length)];

            const newBall = {
                id: Date.now(),
                x: Math.random() * (width - 40),
                animY: new Animated.Value(0),
                caught: false,
                type: randomType.type,
                src: randomType.src,
                points: randomType.points
            };

            setBalls(prev => [...prev, newBall]);

            Animated.timing(newBall.animY, {
                toValue: height,
                duration: 4000,
                useNativeDriver: true,
            }).start(() => {
                checkCatch(newBall);
            });
        }, 1500);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (score >= level*10) {
            clearInterval(intervalRef.current);
            navigation.replace('WinScreen', { level });
        }
    }, [score, level, navigation]);

    const checkCatch = async (ball) => {
        const basketPos = await basketX.__getValue();
        const ballY = await ball.animY.__getValue();

        const isCaught =
            ballY >= height - 150 &&
            ball.x + 40 >= basketPos &&
            ball.x <= basketPos + 150;

        if (isCaught && !ball.caught) {
            setScore(prev => prev + ball.points);
            ball.caught = true;
        }

        setBalls(prev => prev.filter(b => b.id !== ball.id));
    };

    return (
        <ImageBackground
            source={backgroundImage}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}
            resizeMode="cover"
        >
            {/* Очки и мячи */}
            <View style={{ position: 'absolute', top: 70, left: 20, flexDirection: 'row', gap: 12 }}>
                {ballTypes.map(ball => (
                    <View key={ball.type} style={{ alignItems: 'center' }}>
                        <Image source={ball.src} style={{ width: 50, height: 50 }} />
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
                            {ball.points}
                        </Text>
                    </View>
                ))}
            </View>

            {/* Кнопка Назад и Счёт */}
            <View style={{ position: 'absolute', top: 70, right: 20, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        backgroundColor: '#FF8AFF',
                        borderColor: '#fff',
                        borderWidth: 3,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        marginBottom: 10
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 12 }}>
                        Back
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
                    Score: {score}
                </Text>
            </View>

            {/* Мячи */}
            {balls.map(ball => (
                <Animated.Image
                    key={ball.id}
                    source={ball.src}
                    style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        left: ball.x,
                        transform: [{ translateY: ball.animY }],
                    }}
                />
            ))}

            {/* Корзина */}
            <Animated.View
                style={{
                    position: 'absolute',
                    bottom: 40,
                    left: basketX,
                }}
                {...panResponder.panHandlers}
            >
                <Image source={require('../assets/img/basket.png')} style={{ width: 150, height: 80 }} />
            </Animated.View>
        </ImageBackground>
    );
};

export default GameProccesScreen;
