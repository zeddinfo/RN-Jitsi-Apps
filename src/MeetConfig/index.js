/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const { RNJitsiMeetModule } = NativeModules;
const call = RNJitsiMeetModule.call;
const audioCall = RNJitsiMeetModule.audioCall;

const audioMuted = RNJitsiMeetModule.audioMuted;

RNJitsiMeetModule.call = (url, userInfo) => {
    userInfo = userInfo || {};
    call(url, userInfo);
}
RNJitsiMeetModule.audioCall = (url, userInfo) => {
    userInfo = userInfo || {};
    audioCall(url, userInfo);
}
RNJitsiMeetModule.audioMuted = (pwer) => {
    audioMuted(power);
}

export default RNJitsiMeetModule;