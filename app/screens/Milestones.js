import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, View, Text, Button, Alert, Image, TouchableOpacity} from "react-native";

export default function Milestones( {navigation, route} ) {
    const localImage = require('../assets/milestones.png');
    // let status = route.params.status;

    // const isCompleted1 = navigation.getparam('')
    // if (isCompleted1){
    //     return (
    //         <View style={styles.container}>
    //         <ImageBackground 
    //             source={localImage} 
    //             resizeMode = {"cover"}
    //             style={styles.image}>
            
    //         <Button style={styles.blabelimg} title=" X " onPress={() => navigation.navigate("WelcomeScreen")} />
    //         <View style={styles.space}>
    //             <Button style={styles.button1}
    //                 title="Milestone 3"
    //                 onPress={() => Alert.alert('Currently Locked!')} 
    //             />
    //         </View>
    //         <View style={styles.space}>
    //             <Button style={styles.button}
    //                 title="Milestone 2"
    //                 onPress={() => Alert.alert('Congrats on Unlocking!')}
    //             />
    //         </View>
    //         <View style={styles.space}>
    //             <Button style={styles.button}
    //                 title="Milestone 1"
    //                 onPress={() => navigation.navigate("LessonScreen")}
    //             />
    //         </View>
    //         </ImageBackground>
    //     </View>
    
    //     );
    // }
    return (
        <View style={styles.container}>
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
        <View style={styles.button3}>
            <TouchableOpacity 
                    style={styles.choices}
                    onPress={() => Alert.alert('Currently Locked!')}>
                    <Text style={styles.label}>Milestone 3</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.button2}>
            <TouchableOpacity 
                    style={styles.choices}
                    onPress={() => Alert.alert('Currently Locked!')}>
                    <Text style={styles.label}>Milestone 2</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.button1}>
            <TouchableOpacity 
                style={styles.choices}
                onPress={() => navigation.navigate("LessonScreen")}>
                <Text style={styles.label}>Milestone 1</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>

    );
   
}

//React Native Style Sheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginVertical: 16,
    },
    label: {
        fontSize: 17,
        fontWeight: "bold",
    },
    question: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 80,
        fontSize: 20,
        marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    choices: {
        borderRadius: 50, 
        height: 40,
        width: 120,
    },
    button3: {
        position: "absolute",
        top: 290,
        left: 55,
        color: "#5CC8FF",
        marginBottom: 10,
    },
    button2: {
        position: "absolute",
        bottom: 210,
        right: 22,
        color: "#5CC8FF",
        marginBottom: 10,
    },
    button1: {
        position: "absolute",
        bottom: 30,
        left: 45,
        color: "#5CC8FF",
        marginBottom: 10,
    },
    space: {
        marginBottom: 10,
    },
    image: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: "100%"
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
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
  });
  
