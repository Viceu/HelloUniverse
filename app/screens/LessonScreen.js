import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, View, Text, Button, Alert, Image, TouchableOpacity} from "react-native";
import { useState } from "react";

export default function LessonScreen( {navigation} ) {
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
        <ImageBackground 
        styles = {styles.background}
        source = {require("../assets/background.png")}
        >
        </ImageBackground>
        <Image source={require("../assets/close.png")} style={styles.labelimg} />
        <View style={styles.back}>
            <Button color="rgba(52, 52, 52, 0)"
                    title=" "
                    onPress={() => Alert.alert('Back')} // should navigate to milstone screen
            />
        </View>
        <Image source={require("../assets/cat_astronaut2.png")} style={styles.mascot} />
        <Text style={styles.prevpage}>
            Milestone 1
        </Text>
        <Text style={styles.question}>
            Which of the following is an example of a computer?        </Text>
        <Image source={require("../assets/laptop.png")} style={styles.img} />
        <View style={styles.space}>
        <TouchableOpacity 
                style={styles.choices}
                onPress={() => setIsWrong(!isWrong)}>
                <Text style={styles.label}>Tree</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.space}>
                <TouchableOpacity 
                    style={styles.choices}
                    onPress={() => setIsCorrect(!isCorrect)}>
                    <Text style={styles.label}>Laptop</Text>
                </TouchableOpacity>
        </View>

        <View style={styles.space}>
            <TouchableOpacity 
                style={styles.choices}
                onPress={() => setIsWrong(!isWrong)}>
                <Text style={styles.label}>Water Bottle</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.space}>
        <TouchableOpacity 
                style={styles.choices}
                onPress={() => setIsWrong(!isWrong)}>
                <Text style={styles.label}>Cat</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.footer}>
            {isCorrect && <Text style={styles.response}>Correct!</Text>}
            {isWrong && <Text style={styles.response}>Incorrect!, try again!</Text>}
        </View>
    </SafeAreaView>

    );
}

//React Native Style Sheet
const styles = StyleSheet.create({
    //key-value pairs inside the object
    background: {
        flex: 1 // Image background takes up the entire screen 
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      color: "#fff",
    },
    prevpage: {
        position: 'absolute',
        top:0,
        margin: 20,
        marginLeft: 30,
    },
    question: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 10,
        fontSize: 20,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    choices: {
        backgroundColor: '#5CC8FF', 
        padding: 10, 
        borderRadius: 50, 
        height: 60
    },
    label: {
        color: '#000000', 
        alignSelf: "center", 
        margin: 5, 
        fontSize: 18
    },
    space: {
        marginTop: 10,
    },
    img: {
        alignSelf: 'center', 
        width: 140, 
        height: 140,
        marginBottom: 10,
    },
    labelimg: {
        width: 20, 
        height: 20,
        position: 'absolute',
        top:0,
        marginTop: 20,
        marginLeft: 5
    },
    back: {
        width: 30, 
        height: 30, 
        marginTop: 15, 
        position: "absolute", 
        top: 0
    },
    mascot: {
        width: 100, 
        height: 100, 
        marginTop: 20, 
        position: "absolute", 
        top: 10,
        right: 10,
    },
    response: {
        color: '#000000', 
        fontSize: 18
    },
    footer: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center"
    },
  });
  
