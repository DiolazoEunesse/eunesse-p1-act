import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
   <>
    <Container className='hero'>
      <Row>
      <Col>
        <h1 className='display-1 fw-bold'>
           My Work
        </h1>
        <p>Here are some of the projects I've worked on:</p>
        <hr />
        <ul>
          <li>
            <h4>UPang Updates</h4>
            <p>Updates the latest news in PHINMA UPang</p>
          </li>
          <li>
            <h4>Copal</h4>
            <p>Match and chat with the same interests</p>
          </li>
          <li>
            <h4>CITE Events</h4>
            <p>Showcase latest events happen in CITE</p>
          </li>
        </ul>
      </Col>
      <Col className='d-flex justify-content-center align-items-center'>
      <div style={{minWidth:280}}>
      <Carousel>
        <Carousel.Item>
           <div style={{maxHeight:300}}>
            <Image src="/upang_updates.jpg" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>UPang Updates</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{maxHeight:300}}>
            <Image src="/copal.png" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Copal</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <div style={{maxHeight:300}}>
            <Image src="/cite.png" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>CITE Events</h3>    
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Col>
    </Row>
    </Container>
   </>
  );
};

export default Work;
