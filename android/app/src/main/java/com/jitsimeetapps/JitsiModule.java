package com.jitsimeetapps;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.content.Intent;

import androidx.annotation.NonNull;
import org.jitsi.meet.sdk.JitsiMeetActivity;
import org.jitsi.meet.sdk.JitsiMeetConferenceOptions;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.jitsimeetapps.RNJitsiMeetConferenceOptions;

import java.net.MalformedURLException;
import java.net.URL;

public class JitsiModule extends ReactContextBaseJavaModule {
    public JitsiModule (ReactApplicationContext reactContext){
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "JitsiModule";
    }

    @ReactMethod
    public void call(String url, ReadableMap UserInfo){
        RNJitsiMeetConferenceOptions options = new RNJitsiMeetConferenceOptions.Builder()
                .setRoom(url)
                .setAudioOnly(false)
                .setAudioMuted(false)
                .setWelcomePageEnabled(false)
                .build();

    }


    @ReactMethod
    public  void open(){
        Intent intent = new Intent(getCurrentActivity(), JitsiActivity.class);
        getCurrentActivity().startActivity(intent);
    }
}
