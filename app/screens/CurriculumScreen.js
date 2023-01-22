import React from 'react';
import { ImageBackground, StyleSheet, View } from "react-native";


export default function CurriculumScreen( {navigation} ) {
    let content = route.params.content;
    let info = content === "Curriculum"
    return (
        <View style = {styles.container}>
        <ImageBackground 
        source={'../assets/background.png'} 
        resizeMode = "cover"
        style={styles.image}>
         <Image 
            source={require('../assets/nametitle.png')}
            style={{width: 500, height: 100}} />
        <Image 
            source={require('../assets/cat_astronaut.png')}
            style={{width: 300, height: 300}} />
        <Button
            title = "A."
            color="#fff"
            onPress ={() => navigation.navigate("Curriculum", { content: "curriculum"})}
        />
        <Button
            title = "B."
            color="#fff"
            onPress ={() => navigation.navigate("Library", { content: "Library"})}
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

// export default WelcomeScreen;