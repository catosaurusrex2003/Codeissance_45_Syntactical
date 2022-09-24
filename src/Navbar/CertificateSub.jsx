import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '25rem', top : '20vh',  left : '35%', height : '30vh' }}>
      <Card.Body>
        <Card.Title>Submitted</Card.Title>
        <Card.Text>
          Your Certificate has been submitted
        </Card.Text>
        <a className='btn btn-dark' style={{marginLeft : '30'}} href = "/home">Go Back </a>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;