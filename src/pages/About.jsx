import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Footer from "../components/Footer";

function About() {
  return (
    <>
    <Accordion defaultActiveKey={['0']} alwaysOpen className="about">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Quatur qui tempora minima sit omnis</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet. Aut laborum molestiae est enim iure sed tenetur vitae. <br/>
        Ad accusamus consequatur qui tempora minima sit omnis rerum cum ipsam unde ut voluptatem omnis et beatae aliquid? Qui odit voluptatem ut nobis odit et illo aspernatur ex animi similique aut quisquam esse.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Quatur qui tempora minima sit omnis</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet. Aut laborum molestiae est enim iure sed tenetur vitae. <br/>
        Ad accusamus consequatur qui tempora minima sit omnis rerum cum ipsam unde ut voluptatem omnis et beatae aliquid? Qui odit voluptatem ut nobis odit et illo aspernatur ex animi similique aut quisquam esse.Lorem ipsum dolor sit amet. Aut laborum molestiae est enim iure sed tenetur vitae. <br/>
        Ad accusamus consequatur qui tempora minima sit omnis rerum cum ipsam unde ut voluptatem omnis et beatae aliquid? Qui odit voluptatem ut nobis odit et illo aspernatur ex animi similique aut quisquam esse.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Quatur qui tempora minima sit omnis</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet. Aut laborum molestiae est enim iure sed tenetur vitae. <br/>
        Ad accusamus consequatur qui tempora minima sit omnis rerum cum ipsam unde ut voluptatem omnis et beatae aliquid? Qui odit voluptatem ut nobis odit et illo aspernatur ex animi similique aut quisquam esse.
          <ol>
            <li>Lorem ipsum dolor sit amet. Aut laborum molestiae est enim iure sed tenetur vitae.</li>
            <li>Lorem ipsum dolor sit amet. Aut laborum molestiae est enim iure sed tenetur vitae.</li>
            <li>Lorem ipsum dolor sit amet. Aut laborum molestiae est enim iure sed tenetur vitae.</li>
            <li>Lorem ipsum dolor sit amet. Aut laborum molestiae est enim iure sed tenetur vitae.</li>
            <li>Est enim iure sed tenetur vitae.
              <ul>
                <li>enim iure</li>
                <li>enim iure</li>
                <li>enim iure</li>
              </ul>
            </li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   <Footer />
  </>
   );
}

export default About;