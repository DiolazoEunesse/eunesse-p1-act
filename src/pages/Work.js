import React from 'react';
import { Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
   <>
    <Container className='hero d-flex flex-column py-5'>
        <h1 className='display-1 fw-bold'>
           My Work
        </h1>
        <p>Here are some of the projects I've worked on:</p>
        <hr />
          <Container className='d-flex flex-column gap-3'>
            <Row>
              <Col>
                <Image src="/upang_updates.jpg" className="w-100 h-100 object-cover bg-dark rounded"
                style={{minWidth:300}}/>
              </Col>
              <Col className='d-flex flex-column justify-content-center'>
                <h4 className='display-3 fw-bold text-center'>UPang Updates</h4>
                <p className='p-2 border border-2 bg-dark text-light rounded'>Updates the latest news in PHINMA UPang</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col className='d-flex flex-column justify-content-center'>
                <h4 className='display-3 fw-bold text-center'>Copal</h4>
                <p className='p-2 border border-2 bg-dark text-light rounded'>Match and chat with the same interests</p>
              </Col>
              <Col>
                <Image src="/copal.png" className="w-100 h-100 object-cover bg-dark rounded"
                style={{minWidth:300}}/>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <Image src="/cite.png" className="w-100 h-100 object-cover bg-dark rounded"
                style={{minWidth:300}}/>
              </Col>
              <Col className='d-flex flex-column justify-content-center'>
                <h4 className='display-3 fw-bold text-center'>CITE Events</h4>
                <p className='p-2 border border-2 bg-dark text-light rounded'>Showcase latest events happen in CITE</p>
              </Col>
            </Row>
          </Container>
    </Container>
   </>
  );
};

export default Work;
