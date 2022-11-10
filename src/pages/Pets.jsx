import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import PlaceHolderComp from '../components/PlaceHolderComp';
import Footer from '../components/Footer';
import Search from '../components/Search';

function Pets( { data, setData, favourite, setFavourite } ) {
    const [ timing, setTiming ] = useState(true)

    setTimeout((timing) => setTiming(false), 2000);

    if (timing === true) {
      return (
        // <p>"Hello"</p>
      <PlaceHolderComp data={data} />
    )};

    const handleClick = e => {
      const filteredPets = data.filter(d => {
        return ((d.id.toString() === e.currentTarget.value.toString()))
      })
      console.log(filteredPets[0])
      // setFavourite([...favourite, ...filteredPets])

     ((favourite.indexOf(filteredPets) != true ? (setFavourite([...favourite, ...filteredPets])) : console.log("no non no")))
    //   if (favourite.indexOf(filteredPets) > -1) { }
      // console.log(favourite)
    };

    // var arr = ["steve", "bob", "john"];

    // console.log(arr.indexOf("bob") > -1);

    return (
      <>
      {/* <Search data={data} setData={setData} /> */}
      <p>Search</p>
      <Container fluid="md" className='mainContainer'>
      <Row className="justify-content-md-center">
        { data.map(data => ( 
        <Card className='pet-card'>
          <>
            <Card.Header>
              <Card.Title>{data.name}</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={data.img} className="cardimage" />
            <Card.Body>
              <Card.Text>
                My name is {data.name}. {data.owner} is my owner and we stay in {data.location}.
              </Card.Text>
            </Card.Body>
            <Card.Body>
            <Stack direction="horizontal" gap={2}>
                <ListGroupItem as="a" variant="success">
                  <Button gap={1} onClick={handleClick} value={data.id}>
                    Buy Me
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

export default Pets;



