import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = useCallback(async () => {
    let url = `https://my-json-server.typicode.com/JeongChan2/chan-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  },[id]);

  useEffect(() => {
    getProductDetail();
  
  },[getProductDetail])

  return (
      <Container>
        <Row>
          <Col className='product-img col-md-6 col-12'>
            <img alt='' src={product?.img}></img>
          </Col>

          <Col className='pad10 detail-info col-md-6 col-12'>
            <div className='pad10 detail-title'>{product?.title}</div>
            <div className='pad10 detail-price'>₩ {product?.price}</div>
            <div className='pad10 detail-choice'>{product?.choice?"Conscious choice":"　"}</div>

            <DropdownButton className='pad10 detail-dropdown-button' id="dropdown-basic-button" title="사이즈 선택">
              {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
              {product?.size.map((size) => (
                <Dropdown.Item href="#">{size}</Dropdown.Item>
              ))}
            </DropdownButton>

            <div className='pad10'>
              <button className='detail-add-button'>추가</button>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default ProductDetail