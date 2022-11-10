import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Pets() {
  
  const imgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Felis_silvestris_catus_lying_on_rice_straw.jpg/220px-Felis_silvestris_catus_lying_on_rice_straw.jpg"

  const handleClick = () => {
    // console.log("Clicked Buy!")
  }

  return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card className='pet-card'>
            {/* <Card.Img variant="top" src={imgSrc} /> */}
            <Card.Img src={imgSrc} alt={"name"} />
              <span className='quo-icon'></span>
            <Card.Body>
              <Card.Title>{"Pet name"}</Card.Title>
              <Card.Text>
                {"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
              </Card.Text>
            </Card.Body>
            <Button className='buy-btn' onClick={handleClick}>
              Buy me
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Pets;

