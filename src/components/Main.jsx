// import { Button, Container } from 'react-bootstrap';

// function Main() {
  
  // const handleClick = () => {
  //   // console.log("Clicked Buy!")
  // }

  // return (
  //   <Container>
  //     <Button onClick={handleClick}
  //       href="/pets"
  //       className="see-more"
  //       activeStyle={{
  //       background: "darkblue",
  //       }}>
  //          See More
  //     </Button>
  //   </Container>

  // );
// }

// export default Main;

// import Container from 'react-bootstrap/Container';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {
  const handleClick = () => {
    // console.log("Clicked Buy!")
  }

  return (
    <Container>
      <Row>
        <Col>
          <div>
           <article className="home home-bg">
            <div className="transbox">
              <section>
                <h1>KENNEL BUDDIES</h1>
                   <div>
                    <p>Get your kind buddy!</p>
                   </div>
              </section>
            </div>
          </article>
        </div>        
        </Col>
        <Col>
          <Button onClick={handleClick}
          href="/pets"
          className="see-more"
          activeStyle={{
          background: "darkblue",
          }}>
            See More
          </Button>        
        </Col>
      </Row>
    </Container>
  );
}

export default Main;