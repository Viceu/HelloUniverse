import React from 'react';
import { ImageBackground, Button, Image, StyleSheet, View } from "react-native";


export default function LoveLave( {navigation} ) {
    const localImage = require('../assets/completed.png');
    return (
        <View style = {styles.container}>
            <ImageBackground 
            source={localImage} 
            resizeMode = {"cover"}
            style={styles.image}>
            <Button
                title = "Next Milestone!"
                color="#fff"
                onPress ={() => navigation.navigate("Milestones", { status: "completed"})}
            />
            <Button
                title = "Go to Library"
                color="#fff"
                onPress ={() => navigation.navigate("Library", { status: "completed"})}
            />
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
        justifyContent: 'center',
        alignItems: 'center'
    },

})