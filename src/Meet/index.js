import React, { useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { JitsiMeetView, RNJitsiMeetModule } from '../MeetConfig/index';

const Meet = (props) => {
    const { data } = props;
    useEffect(() => {
        const url = 'https://meet.jit.si/deneme'; // can also be only room name and will connect to jitsi meet servers
        const userInfo = { displayName: data, email: 'user@example.com', avatar: 'https:/gravatar.com/avatar/abc123' };
        RNJitsiMeetModule.call(url, userInfo);
    }, [])

    useEffect(() => {
        return () => {
            RNJitsiMeetModule.endCall();
        };
    });

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

    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <JitsiMeetView onConferenceTerminated={onConferenceTerminated} onConferenceJoined={onConferenceJoined} onConferenceWillJoin={onConferenceWillJoin} style={{ flex: 1, height: '100%', width: '100%' }} />
        </View>
    )
}

export default Meet

const styles = StyleSheet.create({})
