import React from 'react';
import { ImageBackground, Button, Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";


export default function LoveLave( {navigation} ) {
    const localImage = require('../assets/completed.png');
    return (
        <View style = {styles.container}>
            <ImageBackground 
            source={localImage} 
            resizeMode = {"cover"}
            style={styles.image}>
            <TouchableOpacity 
                    style={styles.lesson}
                    onPress ={() => navigation.navigate("Milestones")}>
                    <Text style={styles.leslabel}>Next Milestone</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.library}
                    onPress ={() => navigation.navigate("Library")}>
                    <Text style={styles.liblabel}>Go to Library</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>

    );
}

//React Native Style Sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C698F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    lesson: {
        backgroundColor: '#2708A0', 
        padding: 10, 
        borderRadius: 50, 
        height: 65,
        width: 230,
        position: "absolute",
        bottom: 175,
        elevation: 2
    },
    library: {
        backgroundColor: '#fff', 
        padding: 10, 
        borderRadius: 50, 
        height: 65,
        width: 230,
        position: "absolute",
        bottom: 100,
        elevation: 2
    },
    leslabel: {
        color: '#fff', 
        alignSelf: "center", 
        margin: 5, 
        fontSize: 18,
        fontWeight: "bold"
    },
    liblabel: {
        color: '#000000', 
        alignSelf: "center", 
        margin: 5, 
        fontSize: 18,
        fontWeight: "bold"
    }

})