import React from 'react'; 
import sizechart from '../../../data/footer-sizechart.jpg';

const SizeChart = () => {
  return (
    <div className="container">
      <div className="row m-3">
        <h2 style={{ textAlign: 'center' }}>Size Chart</h2>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-8">
          <p>
            To find the size chart of any product on our website, please open the product and press the button beside it.
          </p>
          <img src={sizechart} style={{ padding: '20px' }} alt="Size Chart" />
          <a href="shop.html" style={{ color: 'black', textDecoration: 'none' }}>
            <h6>SHOP NOW!!</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SizeChart;