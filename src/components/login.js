
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StatusBar
} from 'react-native';


export default class login extends Component {
    render() {
    let pic = {
              uri: 'https://regaco.in/img/android.png'
    };
        return(

                <KeyboardAvoidingView behavior= "padding" style={styles.container}>
                      <View style={styles.logoContainer}>

                            <Text style={styles.tittle}> REACT-NATIVE </Text>

                            <Image source={pic} style={{width: 250, height: 250}}/>

                      </View>
                      <View style={styles.formulario}>
                           <StatusBar barStyle="light-content"/>
                           <TextInput
                               placeholder = "Usuario o Email"
                               placeholderTextColor = "rgba(255,255,255,0.7)"
                               returnKeyType = "next"
                               onSubmitEditing = {() => this.passwordInput.focus()}
                               keyboardType = "email-address"
                               autoCapitalize = "none"
                               autoCorrect = {false}
                               style={styles.input}
                           />
                           <TextInput
                               placeholder = "Contraseña"
                               placeholderTextColor = "rgba(255,255,255,0.7)"
                               returnKeyType = "go"
                               secureTextEntry
                               style={styles.input}
                               ref={(input) => this.passwordInput = input}
                           />
                           <TouchableOpacity style={styles.buttonContainer}>
                               <Text style={styles.buttonText}>LOGIN</Text>
                           </TouchableOpacity>
                      </View>
                </KeyboardAvoidingView>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height: 100
    },

    tittle: {
        color: 'white',
        marginTop: 30,
        width: 300,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 35,
        fontWeight: 'bold'
    },

    input: {
        height: 40,
        width:250,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },

    formulario: {
        marginTop: 0,
        padding:30
    },

    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
});