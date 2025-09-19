import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../components/Headers'
import AuthorsCollec from '../components/AuthorsCollec'
export default function Authours() {
    const isAuthors = true
    return (
        <View style={styles.container}>
            <Headers isAuthors={isAuthors} />
            <View>
                <AuthorsCollec isAuthors={isAuthors} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111419',
    },
    text: {
        fontWeight: '500',
        fontSize: 50
    }
})