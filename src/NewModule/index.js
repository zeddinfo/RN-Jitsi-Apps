import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeModules, Button } from 'react-native'


const NewModule = () => {
    const { CalendarModule, JitsiModule, RNJitsiMeetModule } = NativeModules;

    const url = 'https://meet.jit.si/RandomSaintsFadeWeakly';
    const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
    };
    const onPress = () => {
        RNJitsiMeetModule.call(url, userInfo);
    };

    return (
        <Button
            title="Click to invoke your native module"
            color="#841584"
            onPress={onPress}
        />
    )
}

export default NewModule

const styles = StyleSheet.create({})
