// import { Button } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// function Pets() {
  
//   const imgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Felis_silvestris_catus_lying_on_rice_straw.jpg/220px-Felis_silvestris_catus_lying_on_rice_straw.jpg"

//   const handleClick = () => {
//     // console.log("Clicked Buy!")
//   }

//   return (
//     <Row xs={1} md={4} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col>
//           <Card className='pet-card'>
//             {/* <Card.Img variant="top" src={imgSrc} /> */}
//             <Card.Img src={imgSrc} alt={"name"} />
//               <span className='quo-icon'></span>
//             <Card.Body>
//               <Card.Title>{"Pet name"}</Card.Title>
//               <Card.Text>
//                 {"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
//               </Card.Text>
//             </Card.Body>
//             <Button className='buy-btn' onClick={handleClick}>
//               Buy me
//             </Button>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Pets;







import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import PlaceHolderComp from '../components/PlaceHolderComp';
import Footer from '../components/Footer';

function Pets( { data } ) {
    const [ timing, setTiming ] = useState(true)

    // console.log(data)
    // console.log(imgPlaceholder)

    setTimeout((timing) => setTiming(false), 2000);

    if (timing === true) {
      return (
        // <p>"Hello"</p>
      <PlaceHolderComp data={data} />
    )};

    const handleClick = e => {
      console.log("chosen")
    };

    return (
      <>
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



