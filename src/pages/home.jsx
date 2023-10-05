import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Home=()=>{
    return(
        <div className="home">
            <h1>Shop by Gender/Catagory</h1>
    <Row xs={1} sm={2} md={3}  className="g-4">
  
      
    
        <Col >
          <Card>
            <Card.Img variant="top" src="https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/kids-1681462218.jpg" />
            <Card.Body>
              <Card.Title>Kids Collections</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
      
    
        <Col >
          <Card>
            <Card.Img variant="top" src="https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/men-1684835746.jpg" />
            <Card.Body>
              <Card.Title>Men's Collections</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        
        <Col >
          <Card>
            <Card.Img variant="top" src="https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/flite-shop-by-gender-1690527209.jpg" />
            <Card.Body>
              <Card.Title>Women's Collections</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card>
            <Card.Img variant="top" src="https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/boston-1685007172.jpg" />
            <Card.Body>
              <Card.Title>Bostan</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card>
            <Card.Img variant="top" src="https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/maryjane-1685007227.jpg" />
            <Card.Body>
              <Card.Title>Mary Jane</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card>
            <Card.Img variant="top" src="https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/kidsfun-1685007204.jpg" />
            <Card.Body>
              <Card.Title>Pokemon</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        
        <Col >
          <Card>
            <Card.Img variant="top" src="https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/flite-shop-by-brand-1690527134.jpg" />
            <Card.Body>
              <Card.Title>Flite</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        
        <Col >
          <Card>
            <Card.Img variant="top" src="https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/bahamas-shop-by-brand-1689138043.png" />
            <Card.Body>
              <Card.Title>Bahamas</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        
        <Col >
          <Card>
            <Card.Img variant="top" src="https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/shop-by-brand-sparx-1684835482.jpg" />
            <Card.Body>
              <Card.Title>Sparx</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        
    </Row>
    
  

        </div>
    )
}
export default Home;