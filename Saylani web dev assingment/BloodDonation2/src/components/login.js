import React, { useState } from 'react';


import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    Dimensions
} from 'react-native';

import * as Facebook from 'expo-facebook';
import { connect } from 'react-redux';
// import { connect } from 'react-redux'
import { fbData } from '../../store/action'


// import Home from './Home'

// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../components/Home'

// const Stack = createStackNavigator();
// < Stack.Navigator >
//     <Stack.Screen name="Home" component={HomeScreen} />
//     {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
// </Stack.Navigator >




function LoginView(props) {
    // console.log('loginRoute***',route)
    const [email, Setemail] = useState('')
    const [password, SetPassword] = useState('')
    const [message, Setmessage] = useState('')
    const [fbinfo, setfbinfo] = useState('')



    const onRegister = async function () {
        // try {
        //     await registerUser(email, password).then(function () {
        //         Alert.alert('User is registered Successfully')

        //     })

        // }
        // catch (error) {
        //     console.log(error.message)
        // }
        auth.createUserWithEmailAndPassword(email, password).then(() => {
            Alert.alert('correct')
        }).catch(() => {
            Alert.alert('wrong')
        })







    }


    const onLogin = async function () {
        try {
            await LoginUser(email, password)
                .then(function (user) {
                    Alert.alert('correct')

                })


        }
        catch (error) {
            Alert.alert('wrong')

        }
    }
    const facebookLogin = async () => {
        await Facebook.initializeAsync({
            appId: '828442274649000',
        });
        const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
        })

        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)


            const userInfo = await response.json()
            console.log('userInfo', userInfo)
            // const img = userInfo.picture
            props.fbData(userInfo)
            Alert.alert('Logged in!', `Hi ${userInfo.name}!`);
            setfbinfo(userInfo)


            props.navigation.navigate('Registration Form', { itemid: 86, otherparams: 'anything' })

        }



        else {
            // type === 'cancel'
        }
    }


    // constructor(props) {
    //     super(props);
    //     state = {
    //         email: '',
    //         password: '',
    //     }
    // }

    // onClickListener = (viewId) => {
    //     Alert.alert("Alert", "Button pressed " + viewId);
    //     // <a href='./signup.js'></a>
    // }



    return (
        <View style={styles.container}>

            <Image size={50} source={{ uri: 'https://e7.pngegg.com/pngimages/833/894/png-clipart-blood-donation-blood-transfusion-organ-donation-blood-miscellaneous-logo.png' }} style={{ width: '100%', height: '50%' }} />


            {/* <View style={styles.container2} >
            <Image size={50} source={{ uri: 'https://cdn4.vectorstock.com/i/1000x1000/91/43/man-donates-blood-blood-donation-icons-flat-style-vector-6209143.jpg' }} style={{ width: 200, height: 250 }} />

            </View>  */}
            <View style={styles.container4}>
                <Text style={{ color: 'purple', fontSize: 20, fontWeight: 'bold' }}>Welcome To The Blood Donation App</Text>
                <Text style={{ color: 'grey', marginLeft: 8, fontSize: 15, fontStyle: 'italic' }}>Here you can find all the blood donors of every blood group you need,You just have to find the The donor of your need in our donors list and contact him through our App</Text>

                {/* <Image size={50} source={{ uri: 'https://cdn3.iconfinder.com/data/icons/basicolor-votting-awards/24/194_heart_love_favorite_like-512.png' }} style={styles.container2} /> */}
                <Text style={{ color: 'red', fontWeight: 'bold' }}>Thank You!</Text>

            </View>




            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={facebookLogin}>
                <Text style={styles.loginText}>Log In With Facebook</Text>
            </TouchableHighlight>


            {/* </View> */}

            {/* <View style={styles.container}>
            <Image size={50} source={{ uri: 'https://img.freepik.com/free-photo/stethoscope-blue-colored-pills-red-heart-text-thank-you-white_99432-3080.jpg?size=626&ext=jpg' }} style={{ width: 150, height: 150 }} />

            </View> */}



            {/* <Text style={{ fontSize: 30, marginBottom: 10, color: 'black' }}>Log In </Text>
            <View style={styles.inputContainer}>

                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => Setemail(email)} />
            </View>

            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => SetPassword(password)} />
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={onLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={onRegister}>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={facebookLogin}>
                <Text style={styles.loginText}>Log In With Facebook</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                <Text>Register</Text>
            </TouchableHighlight> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',


    },
    container2: {
        // flex: 1,
        // justifyContent: 'space-between',
        // alignItems: 'stretch',
        // backgroundColor: 'white',
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.2,

    },
    container4: {
        flex: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height * 0.4,

        // backgroundColor: 'red',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 350,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {



        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 20,
        width: 250,
        borderRadius: 30,
        marginTop: '15%'
    },
    loginButton: {

        backgroundColor: "#166FE5",

    },
    loginText: {
        color: 'white',
    }
});

const mapDispatchToProps = function (dispatch) {
    return {
        fbData: (data) => dispatch(fbData(data))
    }

}

export default connect(null, mapDispatchToProps)(LoginView);


