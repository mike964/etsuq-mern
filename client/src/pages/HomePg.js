import React from 'react'
import ProductCard from '../components/product/ProductCard'
import { products } from '../mock-data/prodcuts'

// Home page
const HomePg = () => {
  console.log(products)
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 className="h3 mb-0 pt-3 me-2">Trending products</h2>
        <div className="pt-3">
          <a className="btn btn-outline-accent btn-sm" href="shop-grid-ls.html">
            More products
            <i className="ci-arrow-right ms-1 me-n1" />
          </a>
        </div>
      </div>

      <div className="row pt-2 mx-2 bg-w">
        {products.map((el) => (
          <ProductCard product={el} />
        ))}
      </div>
    </div>
  )
}

export default HomePg
