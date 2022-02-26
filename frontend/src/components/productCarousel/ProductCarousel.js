import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { listTopProducts } from "../../actions/productActions";
import './ProductCarousel.css'

const ProductCarousel = () => {
  // const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const {
    loading,
    error,
    // products
  } = productTopRated;

  // useEffect(() => {
  //   dispatch(listTopProducts());
  // }, [dispatch]);

  const products = [
    {
      id: 1,
      name: "maza",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    },
    {
      id: 2,
      name: "maza",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    },
  ];

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <img
            className="d-block w-100"
            src="https://cdnb.artstation.com/p/assets/images/images/028/692/321/large/vineet-joshi-shoes-banner.jpg?1595238969"
            alt="First slide"
            style={{borderRadius:'0 !important'}}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
