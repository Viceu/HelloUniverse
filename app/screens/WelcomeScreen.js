import React from 'react';
import { ImageBackground, Button, Image, StyleSheet, View, SafeAreaView, TouchableOpacity, Text} from "react-native";


export default function WelcomeScreen( {navigation} ) {
    const localImage = require('../assets/welcomeback.png');
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground 
                source={localImage} 
                resizeMode = {"cover"}
                style={styles.image}>
                <TouchableOpacity 
                    style={styles.lesson}
                    onPress ={() => navigation.navigate("Milestones")}>
                    <Text style={styles.leslabel}>Let's Go!</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.library}
                    onPress ={() => navigation.navigate("Library")}>
                    <Text style={styles.liblabel}>Visit Library</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>

    );
}

//React Native Style Sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
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
        height: 60,
        width: 300,
        position: "absolute",
        bottom: 150,
        elevation: 2
    },
    library: {
        backgroundColor: '#fff', 
        padding: 10, 
        borderRadius: 50, 
        height: 60,
        width: 300,
        position: "absolute",
        bottom: 85,
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