import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import PlaceHolderComp from '../components/PlaceHolderComp';
import Footer from '../components/Footer';

function Favourite( { favourite, setFavourite, data } ) {
    const [ timing, setTiming ] = useState(true)

    // console.log(data)
    // console.log(imgPlaceholder)

    setTimeout((timing) => setTiming(false), 2000);

    const handleDelete = e => {
    // console.log(data)
      const filteredPet = favourite.filter(d => {
        return ((d.id.toString() !== e.currentTarget.value.toString()))
      })
      // setFavourite([...favourite, ...filteredPets])
      // console.log(filteredPet)
      setFavourite(filteredPet) //!!
    };

    if (timing === true) {
      return (
      <PlaceHolderComp data={data} />
    )};

    return (
      <>
      <Card className="text-center">
        <Card.Header>Featured Pets</Card.Header>
      </Card>
      <Container fluid="md" className='mainContainer'>
      <Row className="justify-content-md-center">
        { favourite.map(data => ( 
        <Card className='pet-card'>
          <>
            <Card.Header>
              <Card.Title>{data.name}</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={data.img} className="cardimage" />
            <Card.Body>
              <Card.Text>
                My name is {data.name}, {data.owner} is my owner and we stay in {data.location}.
              </Card.Text>
            </Card.Body>
            <Card.Body>
            <Stack direction="horizontal" gap={2}>
                <ListGroupItem as="a" variant="success">
                  <Button gap={1} onClick={handleDelete} value={data.id}>
                    Remove
                  </Button>
                </ListGroupItem>
            </Stack>
            </Card.Body>
          </>
        </Card>
        ))}
      </Row>
    </Container>
  <Footer />
  </>
  );
}

export default Favourite;
