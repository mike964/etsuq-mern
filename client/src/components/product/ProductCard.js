import React from 'react'
import ProductCardActions from './ProductCardActions'

const ProductCard = ({ product }) => {
  const {
    title,
    mainImage: { imageUrl },
    price,
  } = product
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
      <div className="card product-card">
        <ProductCardActions />
        {/* <span className="badge bg-danger badge-shadow">Sale</span> */}

        <div className="product-img-box">
          <a
            className="card-img-top d-block overflow-hidden"
            href="shop-single-v2.html"
          >
            <img src={imageUrl} alt="Product" className="product-img" />
          </a>
        </div>
        <div className="card-body py-2">
          <a className="product-meta d-block fs-xs pb-1" href="#">
            Computers
          </a>
          <div className="x" style={{ maxHeight: '54px', overflow: 'hidden' }}>
            <a className="product-title" href="shop-single-v2.html">
              {title}
            </a>
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
          >
            <i className="ci-cart fs-sm me-1" />
            Add to Cart
          </button>
          <div className="text-center">
            <a
              className="nav-link-style fs-ms"
              href="#quick-view-electro"
              data-bs-toggle="modal"
            >
              <i className="ci-eye align-middle me-1" />
              Quick view
            </a>
          </div>
        </div>
      </div>
      <hr className="d-sm-none" />
    </div>
  )
}

export default ProductCard
