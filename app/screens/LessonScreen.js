import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, View, Text, Button, Alert, Image, Label} from "react-native";

const App = () => (
    <SafeAreaView style={styles.container}>
        <ImageBackground 
        styles = {styles.background}
        source = {require("../assets/background.png")}
        >
        </ImageBackground>
        <Button style={styles.labelimg} title=" " onPress={() => Alert.alert('Back')} />
        <Text style={styles.label}>
            Lessons
        </Text>
        <Text style={styles.question}>
            Which of these is used to point at things on the monitor?
        </Text>
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
    },
    label: {
        position: 'absolute',
        top:0,
        marginLeft: 20,
    },
    question: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 80,
        fontSize: 20,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    button: {
        color: "#5CC8FF",
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
        alignSelf: 'left', 
        width: 20, 
        height: 20,
        position: 'absolute',
        top:0,
        background: require("../assets/background.png"),
    },
  });
  
  export default App;
