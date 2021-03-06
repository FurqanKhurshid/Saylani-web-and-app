import 'react-native-gesture-handler';
import React, { useEffect, useState, } from 'react'
import { View, Text, Button, Alert, FlatList, StyleSheet, StatusBar, Header, ScrollView, TextInput, TouchableOpacity,Image,TouchableHighlight } from 'react-native'
import { connect } from 'react-redux';
// import AsyncStorage  from "@react-native-community/async-storage";
// import { getSpecificProfile } from '../config/firebase'
import { firebase } from '../config/firebase'
// import JoinRoom from '../config/firebase'
import { DataTable, Title, Appbar,icon } from 'react-native-paper';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Icon } from 'react-native-elements'

// import { TouchableOpacity } from 'react-native-gesture-handler';

// import { fbAllData } from '../../store/action'



// import  {AsyncStorage}  from "@react-native-community/async-storage";
// import AsyncStorage from '@react-native-async-storage/async-storage';






function Home(props) {


    const [token, setToken] = useState([])
    const [DocumentId, setDocumentId] = useState('')
    const [fullName, setFullName] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [Health, setHealth] = useState('')
    // const [ Location, setLocation ] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [Allinfo, setAllinfo] = useState('')
    const [chatID, setChatID] = useState('')
    const [name, setName] = useState('')
    const [Allinfo2, setAllinfo2] = useState('')
    const [filterData, setfilterData] = useState(false)
    const [buttonFilter, setbuttonFilter] = useState(true)

    // const fbid = props.data.id


    // console.log('name###***', token.name)




    useEffect(() => {
        getCompanyToken()

    }, [Allinfo])

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        console.log('Km---->', d)
        return d;
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }


    const getCompanyToken = async () => {
        setfilterData(false)
        setbuttonFilter(true)



        var info = [];
        await firebase.firestore().collection('userInfo')


            // .where('fbid', '==', fbid)
            .get().then(function (snaps) {
                snaps.forEach((doc) => {
                    console.log('doc****', doc.data())
                    // getDistanceFromLatLonInKm(latitude,longitude,doc.data().latitude,doc.data.longitude)


                    info.push({ ...doc.data(), tokenId: doc.id })
                    console.log('info***', info)
                    // setDocumentId(info[0].tokenId)



                })
                setAllinfo(info)
                console.log('ok2--->', Allinfo)
                // console.log('docnew---->++++',Allinfo[0].tokenId)
                // setDocumentId(Allinfo[0].tokenId)




                // console.log('Allinfo***', Allinfo)
                // setToken(info[0].tokenId)

                // setFullName(info[0].name)
                // setPhoneNo(info[0].number)
                // setBloodGroup(info[0].bloodGroup)
                // setHealth(info[0].Health)
                // console.log('name***', fullName)





            })









    }

    const getFilterData = async () => {




        var info2 = [];
        const filterName = name;
        // filterName.toLowerCase(1)
        console.log('name---->', filterName)
        await firebase.firestore().collection('userInfo')
            // .where()

            .where('bloodGroup', '==', filterName)



            // .where('fbid', '==', fbid)
            .get().then(function (snaps) {
                snaps.forEach((doc) => {
                    console.log('doc****', doc.data())

                    info2.push({ ...doc.data(), tokenId: doc.id })
                    console.log('info**--2', info2)
                    // setDocumentId(info[0].tokenId)



                })
                setAllinfo2(info2)
                setfilterData(true)
                setbuttonFilter(false)



                console.log('ok--->', Allinfo2)



                // console.log('docnew---->++++',Allinfo[0].tokenId)
                // setDocumentId(Allinfo[0].tokenId)




                // console.log('Allinfo***', Allinfo)
                // setToken(info[0].tokenId)

                // setFullName(info[0].name)
                // setPhoneNo(info[0].number)
                // setBloodGroup(info[0].bloodGroup)
                // setHealth(info[0].Health)
                // console.log('name***', fullName)





            }).then(() => {
                console.log('chala---->')
                setName('')
            })











    }

    const navigateToChat = async (friendId) => {
        // setDocumentId(Allinfo[0].tokenId) 
        const myUid = props.data.id
        // let chatArray = []

        try {




            console.log('myUid****', 'fbid****', myUid, friendId)
            var response = await firebase.firestore().collection('chatrooms')
                .where('user1', '==', myUid)
                .where('user2', '==', friendId)
                .get()
            console.log('response***', response)
            let foundChatroom = false

            response.forEach(doc => {

                console.log('docData****', doc.data())
                foundChatroom = { ...doc.data(), id: doc.id }
                // chatArray.push({...doc.data(), id:doc.id })
                // setChatID(foundChatroom.id)

            })
            console.log('chatroom 1st check***', foundChatroom)
            //  setChatID(chatArray[0].id)




            var chatID = foundChatroom.id
            // { props.fbAllData(chatID) }




            props.navigation.navigate('Chatroom', { chatID: foundChatroom.id })


            if (foundChatroom) return foundChatroom

            console.log('myUid****', 'fbid****', myUid, friendId)
            var response = await firebase.firestore().collection('chatrooms')
                .where('user2', '==', myUid)
                .where('user1', '==', friendId)
                .get()
            console.log('response***', response)
            foundChatroom = false

            response.forEach(doc => {

                console.log('docData****', doc.data())
                foundChatroom = { ...doc.data(), id: doc.id }
                // chatArray.push({...doc.data(), id:doc.id })
                // setChatID(foundChatroom.id)

            })
            console.log('chatroom 2nd check***', foundChatroom)





            console.log('idchat+++++', foundChatroom.id)
            var chatID = foundChatroom.id
            // { props.fbAllData(chatID) }



            props.navigation.navigate('Chatroom', { chatID: foundChatroom.id })
            if (foundChatroom) return foundChatroom








            return await firebase.firestore().collection('chatrooms').add({
                user1: myUid,
                user2: friendId,
                timestamp: Date.now()
            })




        } catch (e) {
            // Alert.alert(e.message)
            console.log('error', e.message)



        }

    }








    // const navigateToChat = async (fbid) => {


    //     var myUid = props.data.id;



    //     var detail = [];

    //     await firebase.firestore().collection('chatrooms')



    //         .where('user1', '==', myUid)
    //         .get().then(function (snaps) {
    //             snaps.forEach((doc) => {
    //                 console.log('docfurqan****', doc.data())

    //                 detail.push({ ...doc.data(), documentId: doc.id })
    //                 // setDocumentId(detail[0].documentId)
    //                 // setName(detail[0].name)
    //                 // console.log('name***', name)
    //                 // SetNumber(detail[0].number)
    //                 // setbloodGroup(detail[0].bloodGroup)
    //                 // setHealth(detail[0].Health)

    //             })
    //             console.log('detail******', detail)















    //         })


    // }


    // async function joinRoom(friendId){

    //     const myUid=props.data.id;
    //     try {

    //         console.log('myUid****', 'fbid****', myUid, friendId)
    //         let response = await firebase.firestore().collection('chatrooms')
    //         .where('user1', '==', myUid)
    //         .where('user2', '==', friendId)
    //         .get()
    //         // console.log('response***', response)
    //         let foundChatroom = false
    //         response.forEach(doc => {

    //             console.log('docData****', doc.data())
    //             foundChatroom = { ...doc.data(), id: doc.id }

    //         })
    //         console.log('chatroom 1st check***',foundChatroom)
    //         //  setChatID(chatArray[0].id)
    //           props.navigation.navigate('Chatroom',{chatID:foundChatroom.id})
    //         if (foundChatroom) return foundChatroom



    //         //********check users as user1 as user2 and user2 as user1   */

    //         console.log('myUid****', 'fbid****', myUid, friendId)
    //         response = await firebase.firestore().collection('chatrooms')
    //         .where('user2', '==', myUid)
    //         .where('user1', '==', friendId)
    //         .get()
    //         // console.log('response***', response)
    //         foundChatroom = false
    //         response.forEach(doc => {

    //             console.log('docData****', doc.data())
    //             foundChatroom = { ...doc.data(), id: doc.id }
    //         })
    //         console.log('chatroom 2nd check***',foundChatroom)
    //         if (foundChatroom) return foundChatroom



    //         // Ab naya add kar dou

    //         return await firebase.firestore().collection('chatrooms').add({
    //             user1: myUid,
    //             user2: friendId,
    //             timestamp: Date.now()
    //         })




    //     }
    //     catch(e){

    //     }


    // }


    const onChange = (text) => {
        setName(text)
        getFilterData()

    }













    return (



        <View style={styles.container}>
            <View style={{ display:'flex', flexDirection: "row",alignItems:'center', width: 300, backgroundColor: '#f1f0f0', marginBottom: 5 }}>




                    <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Image size={50} source={{ uri: 'https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png' }} style={{ width: 50, height: 50 }} />
                        

                    </TouchableOpacity>
                     <Title style={{color:'red'}}> 
                     {/* <Text>Donors List</Text> */}
                    Donors List
                </Title>






            </View>











            {/* <Button title='LogOut' onPress={() => props.navigation.navigate('Blood Donation App')} /> */}





            <View style={styles.inputContainer}>

                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
                <TextInput style={styles.inputs}
                    placeholder="Search Blood Group"
                    icon='search'


                    underlineColorAndroid='transparent'
                    // onChangeText={(name) => getFilterData()}

                    onChangeText={(text) => setName(text)}



                    value={name}

                />

            </View>
            {/* {buttonFilter ? <Button title='Filter' icon={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTlXXfdDbGLfu-vv7IW8puAufpkFpfMwlww&usqp=CAU' }} onPress={() => getFilterData()} /> :
                <Button width='' title='Remove Filter' onPress={() => getCompanyToken()} />} */}
                {buttonFilter ?<TouchableOpacity icon='camera' style={[styles.buttonContainer, styles.loginButton]} onPress={() => getFilterData()}>
                    <Text style={styles.loginText}>Filter</Text>
                </TouchableOpacity>:
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => getCompanyToken()}>
                <Text style={styles.loginText}>Remove FIlter</Text>
            </TouchableOpacity>}









            <Text style={{ color: '#d70f64',margin:5 }}>Here You Can Find All The Donors Who Registered In Our App As a Donor.</Text>




            {!filterData ? <FlatList
                data={Allinfo}
                // style={{display:'flex',alignItems:'center'}}
                keyExtractor={elem => elem.name}
                renderItem={elem => (<View style={styles.middle}>
                    <Text><Title>Name: </Title><Title style={styles.top}>{elem.item.name}</Title></Text>
                    <Text><Title>Phone No: </Title><Title style={{ color: 'purple' }}>{elem.item.number}</Title></Text>
                    <Text><Title>Blood Group: </Title><Title style={styles.top}>{elem.item.bloodGroup}</Title></Text>

                    <Text><Title>Health: </Title><Title style={{ color: 'purple' }}>{elem.item.Health}</Title></Text>
                    {/* <Text><Title>tokenId: </Title><Title style={{ color: 'purple' }}>{elem.item.tokenId}</Title></Text> */}

                    {/* <Button title={`Chat with ${elem.item.name}`} onPress={() => navigateToChat(elem.item.fbid)} /> */}

                </View>)}
            /> :

                <FlatList
                    data={Allinfo2}
                    // style={{display:'flex',alignItems:'center'}}
                    keyExtractor={elem => elem.name}
                    renderItem={elem => (<View style={styles.middle}>
                        <Text><Title>Name: </Title><Title style={styles.top}>{elem.item.name}</Title></Text>
                        <Text><Title>Phone No: </Title><Title style={{ color: 'purple' }}>{elem.item.number}</Title></Text>
                        <Text><Title>Blood Group: </Title><Title style={styles.top}>{elem.item.bloodGroup}</Title></Text>

                        <Text><Title>Health: </Title><Title style={{ color: 'purple' }}>{elem.item.Health}</Title></Text>
                        {/* <Text><Title>tokenId: </Title><Title style={{ color: 'purple' }}>{elem.item.tokenId}</Title></Text> */}

                        {/* <Button title={`Chat with ${elem.item.name}`} onPress={() => navigateToChat(elem.item.fbid)} /> */}

                    </View>)}
                />
            }




        </View>






    )





}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#bac0d1',
        padding: 20,
        // margin: 10,
    },
    top: {
        flex: 0.3,
        // backgroundColor: "red",
        color:'red',
        alignItems:'center'

        // borderWidth: 5,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,

    },
    middle: {
        flex: 0.3,
        backgroundColor: "#e9ebee",
        borderWidth: 5,
        marginBottom:10,
        borderRadius:20,
        borderColor:'#23978b',
        alignItems:'center',
        color:'white'
    },
    bottom: {
        flex: 0.3,
        backgroundColor: "pink",
        borderWidth: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    buttonContainer: {



        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 20,
        width: 150,
        borderRadius: 30,
        marginTop: '15%'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        // borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    buttonContainer: {



        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 20,
        width: 150,
        borderRadius: 10,
        marginLeft:70
        // marginTop: '15%'
    },
    loginButton: {

        backgroundColor: "blue",

    },
    loginText: {
        color: 'white',
    }
})

const mapStateToProps = function (state) {
    return {
        data: state.data,


    }

}



export default connect(mapStateToProps, null)(Home);


