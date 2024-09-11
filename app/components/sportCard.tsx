import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

let imgMapping = new Map<string, string>([
    ["Football", "assets/images/football.png"],
    ["Basketball", "assets/images/basketball.png"],
    ["Formula1", "assets/images/formula1.png"]
]);

interface SportCardProps {
    sportName: string;
    onPress: () => void;
}

export default class SportCard extends React.Component<SportCardProps> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: imgMapping.get(this.props.sportName) }}
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
        padding: 15,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    sportName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});