import React from 'react';
import { ImageBackground, StyleSheet, View } from "react-native";


export default function WelcomeScreen( {navigation} ) {
    return (
        <ImageBackground 
        styles = {styles.background}
        source = {require("../assets/background.png")}
        >
        </ImageBackground>
    );
}

//React Native Style Sheet
const styles = StyleSheet.create({
    //key-value pairs inside the object  :3
    background: {
    flex: 1 // Image background takes up the entire screen 
    }
})

// export default WelcomeScreen;