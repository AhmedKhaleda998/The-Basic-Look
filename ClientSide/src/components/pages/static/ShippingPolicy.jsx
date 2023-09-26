import React from 'react'

const ShippingPolicy = () => {
  return (
    <div className="container">
      <div className="row m-3">
        <h2 style={{textAlign: 'center'}}>Shipping & Delivery</h2>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-6">
          <ul>
            <li>Orders will ship within 2-3 business days</li>
            <li>For problems with your orders, please contact us via the contact form or no our social media accounts
            </li>
            <li>International shipments may be subject to import taxes, duties and custom fees, which are levied once
              your package reaches the country of destination and are the responsibility of the recipient.</li>
          </ul>
          <p><b>Shipping costs are non-refundable nor eligible for store credit</b></p>
        </div>

      </div>
    </div>
  )
}

export default ShippingPolicy