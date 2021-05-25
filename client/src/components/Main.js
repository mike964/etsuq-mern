import React from 'react'
// import Carousl from './Carousl';
import img3426 from '../img/a3426.png'
import apple from '../img/apple.png'
import samsung from '../img/samsung.png'
import huawei from '../img/huawei.png'
import xiaomi from '../img/xiaomi.png'
import { Spinner } from 'react-bootstrap'

const Main = () => {
  const brands = [apple, samsung, huawei, xiaomi]

  const Spiner = () => <Spiner />

  //=============================================================================================================
  return (
    <div role="main">
      {/* <div className="containerr" style={ {} }>
      <img src={ img3426 } alt="" style={ { width: '100%' } } />
    </div> */}

      {/* <div className="containerr m-auto" style={ { backgroundImage: `url(${ img3426 })`, height: '400px', maxWidth: '800px' } } > */}
      {/* <div className="containerr m-auto"  > 
      <div className="centered text-center bg-shadow px-5 py-3"  >
        <p>BestBuy90.shop</p>
        <p>  المتجر الرائد للتسوق عبر الانترنت في العراق</p> 
      </div>
    </div> */}

      <div className="container bg-w ">
        <div
          className="text-center bg-w py-5 row m-auto"
          style={{ fontSize: '1.8rem', fontWeight: '500', maxWidth: '800px' }}
        >
          <div className="col">Coming Soon</div>
          <div className="col">
            <Spinner animation="grow" variant="primary" />{' '}
            <Spinner animation="grow" variant="success" />{' '}
            <Spinner animation="grow" variant="danger" />{' '}
            <Spinner animation="grow" variant="warning" />{' '}
            <Spinner animation="grow" variant="info" />{' '}
          </div>
          <div className="col" dir="rtl">
            <p className="x">قریباً ...</p>
          </div>
        </div>

        <div
          className="row py-5  text-center"
          style={{ fontSize: '1.6rem', fontWeight: '600' }}
        >
          <div className="col">
            <i className="far fa-check-square mx-2" />
            World's Top Brands
          </div>
          <div className="col">
            تسوق بثقة
            <i className="far fa-check-square mx-2" />
          </div>
          <div className="col">
            المارکات العالمیة الممیزة
            <i className="far fa-check-square mx-2" />
          </div>
        </div>

        <div className="container ">
          <div className="row py-5">
            {brands.map((item) => (
              <div className="col px-5 v-center">
                <img
                  src={item}
                  alt=""
                  className="v-center"
                  style={{ width: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="row bg-bb white text-center py-5">
      <div className="col">Shop With Confidence</div>
      <div className="col">تسوق بثقة</div>
    </div> */}
      </div>
      {/* /.container */}
      {/* FOOTER */}

      <div className="pt-5 pb-2" style={{ background: '#141414' }}>
        <div
          className="container text-center " //style={ { background: '#222' } }
        >
          <div className="copyright text-light">
            <p>
              <i className="fas fa-phone-alt" /> +9647815985518{' '}
            </p>
            {/* <p className="x">Iraq - Baghdad</p> */}
            <p> Copyright © 2021 TM6 Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
