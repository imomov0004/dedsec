import { Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';

function Navigation() {
  return (
    <Navbar expand="lg" className='nav'>
      <Container fluid>
        <Navbar.Brand href="#home">DEDSEC</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
          <Offcanvas.Header closeButton className='dark-bg'>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} className="offcanvas-title">
              DEDSEC
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='dark-bg'>
            <Nav className="me-auto">
              <Nav.Link href="#home" className='act'><span style={{color:"#D65A31"}}>/</span>Home</Nav.Link>
              <Nav.Link href="#link"><span style={{color:"#D65A31"}}>/</span>About</Nav.Link>
              <Nav.Link href="#link"><span style={{color:"#D65A31"}}>/</span>Alumni</Nav.Link>
              <Nav.Link href="#link"><span style={{color:"#D65A31"}}>/</span>Education</Nav.Link>
              <Nav.Link href="#link"><span style={{color:"#D65A31"}}>/</span>Events</Nav.Link>
              <Nav.Link href="#link"><span style={{color:"#D65A31"}}>/</span>Gallery</Nav.Link>
              <Nav.Link href="#link"><span style={{color:"#D65A31"}}>/</span>Groups</Nav.Link>
              <Nav.Link href="#link"><span style={{color:"#D65A31"}}>/</span>Links</Nav.Link>
              <Nav.Link href="#link"><span style={{color:"#D65A31"}}>/</span>Sponsors</Nav.Link>
              <Nav.Link href="#link"><span style={{color:"#D65A31"}}>/</span>Blog</Nav.Link>
            </Nav>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;