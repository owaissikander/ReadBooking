// import { createContext, useState, useContext } from 'react'
// const WishContext = createContext()

// export const WishProvider = ({ children }) => {
//   const [WishItem, setWishItem] = useState([])

//   const setWishItems = item => {
//     setWishItem(prev => [...prev, item])
//   }

//   return (
//     <WishContext.Provider value={{ WishItem, setWishItem, setWishItems }}>
//       {children}
//     </WishContext.Provider>
//   )
// }

// export const useWishList = () => useContext(WishContext)

import React, { createContext, useContext, useState } from 'react'

// Context create karein
const WishListContext = createContext()

// Provider component banayein
export const WishListProvider = ({ children }) => {
  const [wishItems, setWishItems] = useState([]) // Yaha array initialize hai

  // Item add karne ka function
  const addToWishlist = item => {
    setWishItems(prevItems => {
      // Check karte hain agar item already exists toh nahi add karenge
      if (!prevItems.some(wishItem => wishItem.id === item.id)) {
        return [...prevItems, item]
      }
      return prevItems
    })
  }

  // Item remove karne ka function
  const removeFromWishlist = itemId => {
    setWishItems(prevItems => prevItems.filter(item => item.id !== itemId))
  }

  // Check karne ka function ki item already wishlist mein hai ya nahi
  const isInWishlist = itemId => {
    return wishItems.some(item => item.id === itemId)
  }

  // Context value jo sab components ko milegi
  const value = {
    wishItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  }

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  )
}

// Custom hook banayein for easy access
export const useWishList = () => {
  const context = useContext(WishListContext)
  if (!context) {
    throw new Error('useWishList must be used within a WishListProvider')
  }
  return context
}
