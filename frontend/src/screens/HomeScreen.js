import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/productCarousel/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import Banner from "../components/banner/Banner";
import BrandBanner from "../components/brandBanner/BrandBanner";
import FeatureOfTheWeek from "../components/featureOfTheWeek/FeatureOfTheWeek";
import FitsOnRotation from "../components/fitsOnRotation/FitsOnRotation";
import EmailFooter from "../components/emailFooter/EmailFooter";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />  
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}

    
        <Banner />
    

      <BrandBanner />
      <FeatureOfTheWeek />
    
        <Banner />
     
      <FitsOnRotation />
    
        <Banner />
      

      <EmailFooter />
    
    </>
  );
};

export default HomeScreen;
