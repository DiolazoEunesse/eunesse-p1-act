import React from 'react';
import { Container, ListGroup} from 'react-bootstrap';

const Education = () => {
  return (
    <>
      <Container className='hero d-flex flex-column py-5'>
        <h2 className='display-1 fw-bold text-center'>My Education</h2>
        <p className='text-center'>These are my academic qualifications:</p>
        <Container>
        <ListGroup>
          <ListGroup.Item className='bg-dark text-light rounded border border-3'>
            <h1 className='display-6 fw-bold'>Highschool</h1>
            <hr/>
            <h1>Calasiao Comprehensive National Highschool</h1>
            <p>2015-2019</p>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-light mt-2 rounded border border-3'>
            <h1 className='display-6 fw-bold'>Senior Highschool</h1>
            <hr/>
            <h1>Senior Tesoro Academy</h1>
            <p>2019-2021</p>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-light mt-2 rounded border border-3'>
            <h1 className='display-6 fw-bold'>College</h1>
            <hr/>
            <h1>PHINMA University of Pangasinan</h1>
            <p>2021 - current</p>
          </ListGroup.Item>
         
        </ListGroup>
        </Container>
      </Container>
    </>
  );
};

export default Education;
