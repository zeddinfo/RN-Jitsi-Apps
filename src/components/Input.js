import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Input = ({ placeholder, value, onChange }) => {

    const [border, setBorder] = useState('#e1e1e1');
    const onFocusForm = () => {
        setBorder('#0aada8')
    }

    const onBlurForm = () => {
        setBorder('#e1e1e1');
    }
    return (

        <TextInput
            style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        />
        // </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})
