import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../components/Headers'
import StoryCollection from '../components/StoryCollection'
export default function Books() {
    const isBook = true
    return (
        <View style={styles.container}>
            <Headers isBook={isBook} />

            <View style={{
                paddingHorizontal: 20
            }}>
                <StoryCollection isBook={isBook} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111419',
        paddingBottom: 120
    },
    text: {
        fontWeight: '500',
        fontSize: 50
    }
})