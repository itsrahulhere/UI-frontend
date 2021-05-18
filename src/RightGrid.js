import './App.css';
import './RightGrid.css';
import {Row,Col,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function RightGrid() {
  return (
    <div className="RightGrid">
            <Container>
                <Row>
                    <Col>
                    <div className="firstBox">
                    Your<br/>limitation<br/>it's only<br/>your<br/> imagination.
                    </div>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
    </div>
  );
}

export default RightGrid;
