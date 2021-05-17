import React from 'react'

const ProductCardActions = () => {
  return (
    <div className="product-card-actions d-flex align-items-center">
      <a className="btn-action nav-link-style me-2" href="#">
        <i className="ci-compare me-1" />
        Compare
      </a>
      <button
        className="btn-wishlist btn-sm"
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title
        data-bs-original-title="Add to wishlist"
        aria-label="Add to wishlist"
      >
        <i className="bi-heart" />
      </button>
    </div>
  )
}

export default ProductCardActions
