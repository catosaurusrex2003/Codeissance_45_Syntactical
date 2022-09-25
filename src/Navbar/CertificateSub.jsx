import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div>
    <img style={{height: "50vh", width: "55vh", marginLeft: "35%", marginBottom: "-15vh"}} src={require("./Verify.png")}/>
    <Card style={{ width: '25rem', top : '20vh',  left : '35%', height : '30vh' }}>
      <Card.Body>
        <Card.Title>Submitted</Card.Title>
        <Card.Text>
          Your Certificate has been submitted. We will get back yo you soon.
        </Card.Text>
        <a className='btn btn-dark' style={{marginLeft : '30'}} href = "/home">Go Back </a>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;