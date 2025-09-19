// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import React, { useContext } from 'react'
// import Headers from '../components/Headers'
// import { useWishList } from '../context/BooksContext';



// export default function Wishlists() {
//     const isWish = true
//     const { WishItem } = useWishList();
//     // const [cart, setCart] = useState([])
//     // console.log('cart==>', cart);

//     console.log("--ddddddddddddd->", WishItem)
//     return (
//         <View style={styles.container} >
//             <Headers isWish={isWish} />
//             <View>
//                 <Text>Your Wishlist</Text>
//                 <FlatList
//                     data={WishItem}
//                     keyExtractor={item => item.id}
//                     renderItem={({ item }) => (
//                         <View>
//                             <Text style={{ color: 'red' }}>{item.author}</Text>
//                             <Text>${item.price}</Text>
//                         </View>
//                     )}
//                 />
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({

//     text: {
//         fontWeight: '500',
//         fontSize: 50
//     }
// })
import Headers from '../components/Headers'
import React from 'react';
import { TouchableOpacity, Text, View, FlatList, Image } from 'react-native';
import { useWishList } from '../context/BooksContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Wishlists = () => {
    const isWish = true
    const { wishItems } = useWishList();
    const navigation = useNavigation();
    console.log("wishItems===>", wishItems);


    return (
        <View style={{ backgroundColor: '#111419', height: '100%', }}>
            <Headers isWish={isWish} />
            {wishItems.length > 0 ? <View style={{ paddingHorizontal: 20 }} >
                <FlatList
                    data={wishItems}
                    renderItem={({ item }) => (

                        < View style={{ marginEnd: 14, borderColor: '#ccc' }}>
                            <Image
                                source={{ uri: item?.storyPicture }}
                                style={{
                                    width: 150,
                                    height: 180,
                                    marginTop: 12,
                                    borderRadius: 12
                                }}
                            />
                            <Text style={{ fontWeight: 'bold', marginStart: 2, marginTop: 10, color: '#feffff' }}>{item.storyTitle.slice(0, 18)}...</Text>
                            <Text style={{ fontSize: 12, fontWeight: '400', marginStart: 2, color: '#818890' }}>by {item.author}</Text>

                            {/* <TouchableOpacity
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
                        </TouchableOpacity> */}
                        </View >
                    )}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View> : <Text style={{ color: '#a3adb7', fontWeight: '400', fontSize: 20, alignSelf: 'center', marginTop: 40 }}>
                "Please Select your wishlish book"</Text>}
        </View>
    );
};

export default Wishlists;