import { Dimensions, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
export default function Headers({ isHome, isBook, isAuthors, isWish }) {
    //const screenWidth = Dimensions.get('window').width
    const { width, height } = useWindowDimensions();
    const navigation = useNavigation()
    return (
        <View style={{
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            alignItems: 'center',
            backgroundColor: '#111419',
            height: 45
        }} >
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                {!isHome && <Ionicons name='arrow-back-outline' color='#f5f6fa' size={24} />}
            </TouchableOpacity>
            <View>
                {
                    isHome && <Text style={{ color: '#f5f6fa', fontWeight: '600', fontSize: 16 }}>Read Books</Text>

                    || isBook && <Text style={{ color: '#f5f6fa', fontWeight: '600', fontSize: 16 }}>Books</Text>
                    || isAuthors && <Text style={{ color: '#f5f6fa', fontWeight: '600', fontSize: 16 }}>Authors</Text>
                    || isWish && <Text style={{ color: '#f5f6fa', fontWeight: '600', fontSize: 16 }}>Wishlists</Text>
                }
            </View>
            <View  >
                <AntDesign name='setting' color='#f5f6fa' size={20} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})