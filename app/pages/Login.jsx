import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { Alert, Text, View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import backImage from '../../assets/background.jpg'


export default function Login ({ navigation }){
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    
    const onHandleLogin = () => {
        if(email !== "" && password != ""){
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log("login 200"))
                .catch((err) => Alert.alert("login Error", err.message))
        }
    }
    return (
        <View style={styles.container}>
            <Image source={backImage} style={styles.image} />
            <View style={styles.formContainer}/>
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}> shortMessage.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    autoCorrect={false}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                    <Text style={{ color: 'white', fontSize: 18}}>Log in</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                <Text style={{ color: 'gray', fontWeight: '600', fontSize: 14}}> Need an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={{ color: '#696CFF', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
                </TouchableOpacity>
                </View>

            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: 340,
        position: 'absolute',
        top: 0,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        backgroundColor: "#fff"

    },
    formContainer: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
    },
    form : {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    button : {
        backgroundColor: '#696CFF',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        color: 'white'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingBottom: 24,
        paddingTop: 15
    },
    input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    }
})