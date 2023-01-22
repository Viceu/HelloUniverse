import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, View, Text, Button, Alert, Image} from "react-native";

export default function LessonScreen( {navigation} ) {
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
        <Text style={styles.label}>
            Milestone 1
        </Text>
        <Text style={styles.question}>
            Which of the following is an example of a computer?        </Text>
        <Image source={require("../assets/laptop.png")} style={styles.img} />
        <View style={styles.space}>
            <Button style={styles.button}
                title="Tree"
                onPress={() => Alert.alert('Incorrect :(')} 
            />
        </View>
        <View style={styles.space}>
            <Button style={styles.button}
                title="Laptop"
                onPress={() => Alert.alert('Correct!')}
            />
        </View>
        <View style={styles.space}>
            <Button style={styles.button}
                title="Water Bottle"
                onPress={() => Alert.alert('Incorrect :(')}
            />
        </View>
        <View style={styles.space}>
            <Button style={styles.button}
                title="Cat"
                onPress={() => Alert.alert('Incorrect :(')}
            />
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
    label: {
        position: 'absolute',
        top:0,
        margin: 20,
        marginLeft: 30,
    },
    question: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 40,
        fontSize: 20,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    button: {
        color: "#5CC8FF",
        borderRadiu: 10,
    },
    space: {
        marginBottom: 10,
    },
    img: {
        alignSelf: 'center', 
        width: 100, 
        height: 100,
        marginBottom: 30,
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
    }
  });
  
