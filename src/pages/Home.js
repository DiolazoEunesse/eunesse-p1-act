import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center py-5' >
        <Row className='hero gap-5'>
          <Col className='d-flex justify-content-center align-items-center'>
            <Image src='/profile.jpg' className='w-100 h-full bg-black'style={{minWidth:250,height:400, objectFit: 'cover'}} rounded fluid/>
          </Col>
          <Col>
            <h1 className='display-3 fw-bold'>Eunesse Diolazo</h1>
            <h3 className='display-6 fw-normal'>Aspiring Web Developer</h3>
            <hr/>
            <p className='p-2 border border-2 bg-dark text-light rounded'>
              A 20 year's old BSIT Student in PHINMA University of Pangasinan who loves coffee and programming.
            </p>
            <div className='d-flex align-items-center gap-2'>
              <Link to='/work'>
                <Button className='btn-lg border border-2' variant='dark'>View Work</Button>
              </Link>
              |
              <SocialLinks />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
