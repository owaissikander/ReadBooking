import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Headers from '../components/Headers'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import StoryCollection from '../components/StoryCollection'
import AuthorsCollec from '../components/AuthorsCollec'
import { useNavigation } from '@react-navigation/native'
export default function Home() {
    const isHome = true
    const { width, height } = useWindowDimensions();
    const navigation = useNavigation()
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Headers isHome={isHome} />

            {/* search bar  */}
            <View style={{
                alignSelf: 'center',
                backgroundColor: '#28313a',
                width: width * 0.9,
                marginTop: 16,
                borderRadius: 14,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',

            }} >
                <View style={{ justifyContent: 'center', marginBottom: 4, marginStart: 18 }} >
                    <EvilIcons name='search' size={30} color='#cdd5dfff' /></View>
                <View>
                    <TextInput style={{ color: '#d6dde7ff', marginStart: 4 }} placeholderTextColor={'#d2dbe7ff'} placeholder='Search for Books or Authors' />
                </View>
            </View>
            {/* Trending stories show here  */}
            <View style={{ padding: 18, marginTop: 6 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Text style={{ fontSize: 26, fontWeight: '600', letterSpacing: 0, color: '#feffff' }}>Trending Now</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Books')}>

                        <Text style={{ fontSize: 12, marginTop: 8, fontWeight: '500', color: '#feffff' }}>Show more</Text>
                    </TouchableOpacity>
                </View>
                <StoryCollection />
            </View>
            {/* Make a authors component */}
            <View style={{ padding: 18 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Text style={{ fontSize: 26, fontWeight: '600', letterSpacing: 0, color: '#feffff' }}>Authors</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Authors')}>
                        <Text style={{ fontSize: 12, marginTop: 8, fontWeight: '500', color: '#feffff' }}>Show more</Text>
                    </TouchableOpacity>
                </View>
                <AuthorsCollec />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111419'
    },
    text: {
        fontWeight: '500',
        fontSize: 50
    }
})