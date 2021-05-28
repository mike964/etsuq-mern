import React from 'react'

// product seller store list item
const SellerListItem = ({ seller }) => {
  return (
    <div id="accordion" role="tablist" className="mb-3">
      {seller && (
        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <a
                data-toggle="collapse"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {seller.name}
              </a>
            </h5>
          </div>
          <div
            id="collapseOne"
            className="collapse show"
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SellerListItem
