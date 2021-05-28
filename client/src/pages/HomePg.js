import React from 'react'
import PaginationBox from '../components/PaginationBox'
import ProductCard from '../components/product/ProductCard'
import { products } from '../mock-data/prodcuts'

// Home page
const HomePg = () => {
  console.log(products)
  return (
    <div className="bg-w p-3">
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 className="h3 mb-0 pt-3 me-2">Latest products</h2>
        <div className="pt-3">
          <a className="btn btn-outline-accent btn-sm" href="shop-grid-ls.html">
            filters
            <i className="ci-arrow-right ms-1 me-n1" />
          </a>
        </div>
      </div>

      <div className="row pt-2 mx-2 bg-w">
        {products.map((el) => (
          <ProductCard product={el} />
        ))}
      </div>

      <div className="mt-3">
        <PaginationBox
          // pages={ pages }
          pages={3}
          page={1}
          //    page={ page }
          //  keyword={ keyword ? keyword : '' }
        />
      </div>
    </div>
  )
}

export default HomePg
