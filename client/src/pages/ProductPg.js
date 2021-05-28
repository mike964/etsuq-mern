import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import MsgAlert from '../components/MsgAlert'
import Meta from '../components/Meta'
import Rating from '../components/Rating'
import {
  getProductById,
  getProductSellers,
  getProductSellers_mk,
} from '../redux/actions/mock-actions'
import SellersList from '../components/Seller/SellersList'

const ProductPg = ({ history, match }) => {
  console.log('# ProductPg mounted.')
  const [qty, setQty] = useState(1) // quantity for Select

  const [product, setProduct] = useState({})
  const [sellers, setSellers] = useState([])
  const error = ''
  const loading = false

  useEffect(() => {
    // console.log(match.params)
    let x = getProductById(match.params.code)
    setProduct({
      ...x,
      image: x.mainImage.imageUrl,
    })

    console.log(x.asin)
    let xx = getProductSellers_mk(x.asin)
    console.log(xx)
    setSellers(xx)
  }, [])

  const Loader = <span className="x"></span>
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        {' '}
        Go Back{' '}
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <MsgAlert variant="danger">{error}</MsgAlert>
      ) : (
        <>
          <Meta title={product.title} />
          <Row className="mb-3 box-segment p-3">
            <Col md={4}>
              <Image
                src={product.image}
                alt={product.name}
                style={{ maxHeight: '300px' }}
              />
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.title}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    // text={`${product.numReviews} reviews`}
                    text={product.raing}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    variant="dark"
                    block
                    //  onClick={ addToCartHandler }
                    //  disabled={product.countInStock === 0}
                  >
                    Sellers list
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row className="mb-3 box-segment p-3">
            <div className="w-100">
              <SellersList sellers={sellers} />
            </div>
          </Row>
          <Row>
            {/* <Col md={ 6 }>
          <h2>Reviews</h2>
          { product.reviews.length === 0
            ? <MsgAlert>No Reviews</MsgAlert> :
            <ProductReviewList
              reviews={ product.reviews }
            /> }

          <ListGroup.Item>
            <h2>Write a Customer Review</h2>
            { successProductReview && (
              <MsgAlert variant='success'>
                Review submitted successfully
              </MsgAlert>
            ) }
            { loadingProductReview && <Loader /> }
            { errorProductReview && (
              <MsgAlert variant='danger'>{ errorProductReview }</MsgAlert>
            ) }
            { userInfo ? (
              <ReviewForm productId={ match.params.id } />
            ) : (
              <MsgAlert>
                Please <Link to='/login'>sign in</Link> to write a review{' ' }
              </MsgAlert>
            ) }
          </ListGroup.Item>
        </Col> */}
          </Row>
        </>
      )}
    </>
  )
}

export default ProductPg
