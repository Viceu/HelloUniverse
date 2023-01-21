import React from 'react';
import { ImageBackground, Button, StyleSheet, View } from "react-native";


export default function WelcomeScreen( {navigation} ) {
    return (
        <View style = {styles.container}>
            <Button
                title = "Curriculum"
                onPress ={() => navigation.navigate("Curriculum", { content: "curriculum"})}
            />
            <Button
                title = "Library"
                onPress ={() => navigation.navigate("Library", { content: "Library"})}
            />
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
    }
    
})