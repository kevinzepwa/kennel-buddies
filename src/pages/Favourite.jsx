import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';

function Favourite() {
  return (
    <Card className="text-center">
      <Card.Header>Featured Pets</Card.Header>
      
      <Footer />
    </Card>
  );
}

export default Favourite;