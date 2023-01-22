import React from 'react';
import { ImageBackground, Button, Image, StyleSheet, View, SafeAreaView} from "react-native";


export default function WelcomeScreen( {navigation} ) {
    const localImage = require('../assets/background2.png');
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground 
            source={localImage} 
            resizeMode = {"cover"}
            style={styles.image}>
             <Image 
                source={require('../assets/nametitle.png')}
                style={{width: 500, height: 100}} />
            <Image 
                source={require('../assets/cat_astronaut.png')}
                style={{width: 300, height: 300}} />
            <View style={styles.lesson}>
            <Button 
                title = "let's learn!"
                onPress ={() => navigation.navigate("Milestones")}
            />
            </View>
            <Button style={styles.library}
                title = "library of character"
                onPress ={() => navigation.navigate("Library")}
            />
            </ImageBackground>
        </SafeAreaView>

    );
}

//React Native Style Sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#4C698F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lesson: {
        color: "rgba(39, 8, 160)",
        marginBottom: 10,
    }
})