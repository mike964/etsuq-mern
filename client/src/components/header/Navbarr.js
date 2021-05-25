import React from 'react'
import DropDown from '../DropDown'

// // input group
const InputGrup = ({ placeholder, btnLabel, className, textRight }) => (
  <>
    <div className={'input-group ' + (className ? className : '')}>
      <input
        type="text"
        className={'form-control ' + (textRight ? 'text-right' : '')}
        placeholder={placeholder}
        aria-describedby="basic-addon1"
      />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button">
          {btnLabel}
        </button>
      </div>
    </div>
  </>
)

// ================================================================================================
const Navbar = () => {
  return (
    <div className="navbar-main black">
      <div className="navbar-1 py-2">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="bestbuy-logo">
                <a className="navbar-brandd" href="/">
                  <i className="far fa-check-square" /> BestBuy90{' '}
                </a>
              </div>
              {/* <i className="fas fa-shopping-cart" />  */}
            </div>
            <div className="col pt-1">
              <InputGrup
                placeholder="ابحث عن منتج"
                btnLabel={<i className="fas fa-search" />}
                textRight
              />
            </div>

            <div className="col-3 white pt-2 text-right">
              <button className="aut-btn">
                {' '}
                دخول <i className="fas fa-sign-in-alt"></i>{' '}
              </button>{' '}
              <button className="aut-btn">
                {' '}
                تسجیل <i className="fas fa-user-plus" />{' '}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-2" dir="rtl">
        <div className="container ">
          <div className="d-flex justify-content-around">
            <DropDown
              label="موبایل"
              items={['apple', 'samsung', 'huawei', 'xiaomi']}
            />
            <DropDown
              label="اجهزه حاسوب"
              items={['hp', 'dell', 'asus', 'acer']}
            />
            <DropDown
              label="اجهزه لوحیة"
              items={['hp', 'dell', 'asus', 'acer']}
            />
            <DropDown
              label="اجهزه ذکیه"
              items={['hp', 'dell', 'asus', 'acer']}
            />
            {/* accessories */}
            <DropDown
              label="مستلزمات"
              items={['سماعات اذن', 'dell', 'asus', 'acer']}
            />
            <DropDown
              label="اجهزه ملحقة"
              items={['سماعات اذن', 'dell', 'asus', 'acer']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
