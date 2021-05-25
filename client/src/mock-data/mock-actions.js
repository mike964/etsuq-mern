// Searching in array
// Following example uses filter() to filter array content based on search criteria.

import { products } from './prodcuts'

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => {
    return el.asin.indexOf(query) !== -1
  })
}

// console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']

export const getProductById = (asin) => {
  let product = filterItems(products, asin)
  // console.log(product)
  // return product
  return product[0]
}
