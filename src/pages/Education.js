import React from 'react';
import {Accordion, Container, ListGroup} from 'react-bootstrap';


const Education = () => {
  return (
    <>
      <Container className='hero d-flex flex-column'>
        <h2 className='display-1 fw-bold text-center'>My Education</h2>
        <p className='text-center'>These are my academic qualifications:</p>
        <hr/>
        <Container className='p-5'>
        <ListGroup>
          <ListGroup.Item className='bg-dark text-light'>
            <h1 className='display-4 fw-bold'>Highschool</h1>
            <hr/>
            <h1>Calasiao Comprehensive National Highschool</h1>
            <p>2015-2019</p>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-light'>
            <h1 className='display-4 fw-bold'>Senior Highschool</h1>
            <hr/>
            <h1>Senior Tesoro Academy</h1>
            <h3>2019-2021</h3>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-light'>
            <h1 className='display-4 fw-bold'>College</h1>
            <hr/>
            <h1>PHINMA University of Pangasinan</h1>
            <h3>2021 - current</h3>
          </ListGroup.Item>
         
        </ListGroup>
        </Container>
      </Container>
    </>
  );
};

export default Education;
