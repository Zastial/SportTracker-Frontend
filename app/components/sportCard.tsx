import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const imgMapping = {
    "Football": require('../../assets/images/football.png'),
    "Basketball": require('../../assets/images/basketball.png'),
    "Formula1": require('../../assets/images/formula1.png')
};

interface SportCardProps {
    sportName: string;
    onPress: () => void;
}

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 40) / 2; // 40 pour le padding (20 de chaque côté)
const imageSize = cardWidth * 0.7; // L'image prendra 70% de la largeur de la carte

export default class SportCard extends React.Component<SportCardProps> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[styles.container, { width: cardWidth }]}>
                <View style={[styles.imageContainer, { width: imageSize, height: imageSize }]}>
                    <Image
                        source={imgMapping[this.props.sportName as keyof typeof imgMapping]}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.sportName}>{this.props.sportName.toUpperCase()}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        margin: 5,
    },
    imageContainer: {
        borderRadius: 1000, // Une grande valeur pour assurer un cercle parfait
        overflow: 'hidden',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    sportName: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});