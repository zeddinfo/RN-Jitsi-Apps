import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';



function InputUser() {
    const [nama, setNama] = useState("");
    const onConferenceTerminated = (nativeEvent) => {
        /* Conference terminated event */
        console.log('terminated', nativeEvent);
    }

    const onConferenceJoined = (nativeEvent) => {
        /* Conference joined event */
    }

    const onConferenceWillJoin = (nativeEvent) => {
        /* Conference will join event */
    }

    const joinVideo = () => {
        Actions.Meet({ data: nama })
    }

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setNama(value)}
                    value={nama}
                    placeholder="Masukkan nama"
                />
            </View>
            <TouchableOpacity
                onPress={joinVideo}
                style={styles.btn}

            >
                <Text style={styles.text}>Join</Text>
            </TouchableOpacity>
            {/* </View> */}
        </View>
    )
}
export default InputUser;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '80%',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
    btn: {
        backgroundColor: "#0aada8",
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 100,
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    }
})