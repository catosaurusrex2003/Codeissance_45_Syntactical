import Card from 'react-bootstrap/Card';

function Instructor() {
    

    return (
        <div className="insout" style={{height : '20vh'}}>
        <img style={{height: "50vh", width: "55vh", marginLeft: "35%", marginBottom: "-15vh"}} src={require("./Instructor.png")}/>
        <Card style={{ width: '25rem', top : '20vh',  left : '35%', height : '30vh' }}>
            <Card.Body>
                <Card.Text>
                    To be eligible, upload your Teaching Certificate
                </Card.Text>
                <div className="in">

                    <input type="file" className="btn btn-dark" style={{width : '16rem'}}></input>
                </div>
                <div className="sub">

                    <a className="btn btn-dark" href="/CertificateSub" style={{ marginTop: '1rem' }}>Submit</a>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Instructor;