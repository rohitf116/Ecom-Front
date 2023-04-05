import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useParams, useSearchParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { Col, Row } from "react-bootstrap";
const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart, "Hii");
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping cart</h1>
        {console.log(cart)}
      </Col>
      <Col md={2}></Col> <Col md={2}></Col>
    </Row>
  );
};

export default CartScreen;
