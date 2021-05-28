import React from 'react'
import { Link } from 'react-router-dom'
import ProductCardActions from './ProductCardActions'

const ProductCard = ({ product }) => {
  const {
    title,
    mainImage: { imageUrl },
    price,
  } = product
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-3">
      <div className="card product-card rounded text-center">
        <ProductCardActions />
        {/* <span className="badge bg-danger badge-shadow">Sale</span> */}

        <div className="product-img-box">
          <Link to={`/product/slugg/${product.asin}`}>
            <img
              src={imageUrl}
              alt="Product"
              className="product-img"
              style={{ maxHeight: '200px' }}
            />
          </Link>
        </div>
        <div className="card-body py-2">
          <div className="product-title-container">
            <Link
              to={`/product/slugg/${product.asin}`}
              className="product-title"
            >
              {title}
            </Link>
          </div>
          <div className="d-flex justify-content-between">
            <div className="product-price">
              <span className="text-accent">{price}</span>
              <del className="fs-sm text-muted">
                $149.<small>99</small>
              </del>
            </div>
            <div className="star-rating">
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star" />
            </div>
          </div>
        </div>
        <div className="card-body card-body-hidden">
          <button
            className="btn btn-primary btn-sm d-block w-100 mb-2"
            type="button"
            style={{ background: '#27a150', border: 'none' }}
          >
            <i className="ci-cart fs-sm me-1" />
            Sellers
          </button>
        </div>
      </div>
      <hr className="d-sm-none" />
    </div>
  )
}

export default ProductCard
