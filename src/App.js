import './snake';
import './App.css';
import {Button,Row,Col,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RightGrid from './RightGrid';
function App() {
  return (
    <div className="App">
   <Container>
    
     <div className="left">
     <Row>
       <Col >
         <div className="left-area">
         <div className="profile">
         <div className="is-active-name">
           Anand Agarwal
          </div>
          <div className="gmail">
           anand.a@bk.com
         </div>
         </div>
        <a href="abc" class="nav-item" className="is-active-left">Motivation</a><br /><br />
        <a href="abc" class="nav-item">Productivity</a>
        <Button class="btn btn-secondary " id="leftButton">Play All</Button><br/><br/>
        <a href="abc" class="nav-item">Design</a><br/><br/>
        <a href="abc" class="nav-item">Study</a><br/><br/>
        <div className="left-bottom">
        <Container>
        <Row>
          <Col></Col>
          <Col sm="10">Pro account is more powerful. Get 30% off
          <Button class="btn btn-secondary " id="SeePro">See Pro</Button><br/><br/>
          </Col>
          </Row>
          </Container>
        </div><br/><br/>
        <a href="abc" class="nav-item" className="is-active-left">Logout</a><br /><br />
        </div>
        </Col>
      <Col xs sm md lg = "8">
     <div className="right">
     <div className="right-top">
      <div className="right-top-head">
      <h1 className="Motivation"><b>Motivation</b></h1>
       
       <nav class="nav">
          <a href="abc" class="nav-item " active-color="white"><div className="is-active">All</div></a>
          <a href="abc" class="nav-item">Articles</a>
          <a href="abc" class="nav-item">Podcast</a>
          <a href="abc" class="nav-item">Video</a>
          <a href="abc" class="nav-item">Downloads</a>
          <Button class="btn btn-secondary " id="PlayButton">Play All</Button>
          <span class="nav-indicator"></span>
        </nav>
       </div>  
       <div className="right-top-head-profile">
       
      </div>  
      </div>  
      <div className="right-bottom">
        <RightGrid/>
      </div>   
     </div>

     </Col>
     </Row>
     </div>
    
     
     </Container>
    </div>
  );
}

export default App;
