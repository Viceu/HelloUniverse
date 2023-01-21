import React from 'react';
import { ImageBackground, StyleSheet } from "react-native"


function WelcomeScreen(props) {
    return (
        <ImageBackground source = {require("../assets/background.jpg")}>

        </ImageBackground>
    );
}

//React Native Style Sheet
const styles = StyleSheet.create({
    //key-value pairs inside the object  :3

})

export default WelcomeScreen;