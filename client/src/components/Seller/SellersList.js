import React from 'react'
import SellerListItem from './SellerListItem'

// seller store list item
const SellersList = ({ sellers }) => {
  // stores
  return (
    <div className="stores-list">
      {sellers &&
        sellers.map((seller) => (
          <SellerListItem key={seller._id} seller={seller} />
        ))}
    </div>
  )
}

export default SellersList
