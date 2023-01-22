import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, View, Text, Button, Alert, Image, Label} from "react-native";

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
        
        <Button style={styles.blabelimg} title=" X " onPress={() => navigation.navigate("WelcomeScreen")} />
        <View style={styles.space}>
            <Button style={styles.button1}
                title="Milestone 3"
                onPress={() => Alert.alert('Currently Locked!')} 
            />
        </View>
        <View style={styles.space}>
            <Button style={styles.button}
                title="Milestone 2"
                onPress={() => Alert.alert('Currently Locked!')}
            />
        </View>
        <View style={styles.space}>
            <Button style={styles.button}
                title="Milestone 1"
                onPress={() => navigation.navigate("LessonScreen")}
            />
        </View>
        </ImageBackground>
    </View>

    );
   
}

//React Native Style Sheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      marginVertical: 16,
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
        marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    button1: {
        alignSelf: 'left', 
        color: "#5CC8FF"
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
    backbutton: {
        alignSelf: 'left', 
        alignSelf: 'up', 
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
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
  });
  
