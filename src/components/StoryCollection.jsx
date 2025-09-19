import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import storiesData from '../assets/data'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useWishList } from '../context/BooksContext'


export default function StoryCollection({ isBook, item }) {
    const [isLike, setIslike] = useState()
    const { wishItems, addToWishlist, removeFromWishlist, isInWishlist } = useWishList();

    // const { setWishItem, WishItem } = useWishList([])
    // const [cart, setCart] = useState([])
    // console.log('cart==>', cart);

    // console.log("--->", WishItem)
    // useEffect(() => {
    //     setWishItem([...cart, item])
    // }, [cart])

    const handleWishlistToggle = (item) => {
        if (isInWishlist(item.id)) {
            removeFromWishlist(item.id);
        } else {
            addToWishlist(item);
        }
    };
    return (
        <View>
            <FlatList
                data={storiesData}
                renderItem={({ item, isBook }) => (

                    < View style={{ marginEnd: 14, borderColor: '#ccc' }}>
                        <Image
                            source={{ uri: item?.storyPicture }}
                            style={{
                                width: isBook ? 120 : 150,
                                height: 180,
                                marginTop: 12,
                                borderRadius: 12
                            }}
                        />
                        <Text style={{ fontWeight: 'bold', marginStart: 2, marginTop: 10, color: '#feffff' }}>{item.storyTitle.slice(0, 14)}...</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', marginStart: 2, color: '#818890' }}>by {item.author}</Text>
                        {/* {
                            cart.includes(item) ? (
                                <TouchableOpacity
                                    onPress={() => setCart(cart.filter((x) => x.id !== item.id))}
                                    style={{
                                        height: 34,
                                        width: 34,
                                        backgroundColor: '#ffffff',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 17,
                                        position: 'absolute',
                                        top: 20,
                                        right: 15
                                    }}>



                                    <AntDesign name={'heart'} size={20} color={'red'} />



                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => setCart([...cart, item])}
                                    style={{
                                        height: 34,
                                        width: 34,
                                        backgroundColor: '#ffffff',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 17,
                                        position: 'absolute',
                                        top: 20,
                                        right: 15
                                    }}>




                                    <AntDesign name={'hearto'} size={20} color={'red'} />


                                </TouchableOpacity>
                            )
                        } */}
                        <TouchableOpacity
                            onPress={() => handleWishlistToggle(item)}
                            style={{
                                position: 'absolute',
                                right: 15,
                                top: 20,
                                backgroundColor: 'white',
                                padding: 8,
                                borderRadius: 20
                            }}
                        >
                            <AntDesign
                                name={isInWishlist(item.id) ? 'heart' : 'hearto'}
                                size={20}
                                color="red"
                            />
                        </TouchableOpacity>
                    </View >
                )}
                numColumns={isBook && 2}
                keyExtractor={(item, isBook) => item.id.toString()}
                horizontal={isBook ? false : true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({})