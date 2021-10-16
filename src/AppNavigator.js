import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux';
import App from '../App';
import InputUser from './InputUser';
import Meet from './Meet';

const stateHandler = (prevState, newsState, action) => {
    // console.log('onstatechange : ACTION:', action);
};

const AppNavigator = () => {
    return (
        <Router
            onStateChange={stateHandler}
            sceneStyle={styles.screen}

        >
            <Scene key="root" hideNavBar={true}>
                <Scene
                    key="InputUser"
                    component={InputUser}
                    type="reset"
                />
                <Scene
                    key="Meet"
                    component={Meet}

                />
            </Scene>
        </Router>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
