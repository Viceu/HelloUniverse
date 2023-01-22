import React from 'react';
import { ImageBackground, Button, Image, StyleSheet, SafeAreaView, View} from "react-native";


export default function WelcomeScreen( {navigation} ) {
    const localImage = require('../assets/library.png');
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground 
                source={localImage} 
                resizeMode = {"cover"}
                style={styles.image}>
                <Image source={require("../assets/close.png")} style={styles.labelimg} />
                <View style={styles.back}>
                    <Button color="rgba(52, 52, 52, 0)"
                        title=" "
                        onPress={() => navigation.navigate("WelcomeScreen")}
                    />
                </View>
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
    labelimg: {
        width: 25, 
        height: 25,
        position: 'absolute',
        top: 30,
        left: 25
    },
    back: {
        width: 35, 
        height: 35, 
        position: "absolute", 
        top: 25,
        left: 20
    },
})