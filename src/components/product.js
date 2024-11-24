import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

const Product = (props) => {
  const { id, slug, name, img, price } = props.data;
  return (
    <div className="">
      <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div class="sc-card-product">
          <div class="card-media">
            <Link to={slug}>
              <img
                src={img}
                alt="prudct_Image"
              />
            </Link>
          </div>
          <div class="card-title">
            <h5 class="style2">
              {" "}
              <Link to={slug}>{name}</Link>
            </h5>
            <div class="tags">New</div>
          </div>
          <div class="meta-info">
            <div class="author">
              {/* <div class="avatar">
                                  
                                    <img src="" alt="Image">
                                </div> */}
              <div class="info">
                <span>Owned By</span>
                <h6>
                  <Link to={slug}>ademola</Link>
                </h6>
              </div>
            </div>
            <div class="price">
              <span>Current Price</span>
              <h5>${price}</h5>
            </div>
          </div>
          <div class="card-bottom">
            <Link
              to="#"
              data-toggle="modal"
              data-target={`#popup_bid${id}`}
              class="sc-button style bag fl-button pri-3"
            >
              <span>Add To Cart</span>
            </Link>
            <Link
              to={slug}
              class="view-history reload"
            >
              View Description
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
