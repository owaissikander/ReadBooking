import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import storiesData from '../assets/data';


export default function AuthorsCollec({ isAuthors }) {

    console.log("-0-00000000>>>", isAuthors);

    return (
        <View>
            <FlatList
                data={storiesData}
                renderItem={({ item, isAuthors }) => (
                    <View style={{ marginEnd: 14, borderColor: '#ccc' }}>
                        <Image
                            source={{ uri: item?.authorPicture }}
                            style={{ width: 110, height: 110, marginTop: 10, borderRadius: isAuthors ? 55 : 20 }}
                        />
                        <Text style={{ fontWeight: 'bold', marginStart: 2, marginTop: 10, alignSelf: 'center', color: '#feffff' }}>{item.author.slice(0, 16)}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', marginStart: 2, alignSelf: 'center', color: '#818890' }}>{item.genre}</Text>

                    </View>
                )
                }
                keyExtractor={(item) => item.id.toString()}
                horizontal={isAuthors ? false : true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({})