import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function NavScrollExample() {
  return (
    
    <Navbar expand="lg" style={{position:'relative', background:'transparent'}}>
      <Container className='mt-3 '>
        <Navbar.Brand href="#" className='navbar-logo'>PhysicalTherapy<span style={{color:'#ea728c'}}>.</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }} 
            navbarScroll
          >
            <Nav.Link href="#action1" className='navbar-btn mx-4'>Home</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown" className='navbar-btn mx-4'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className='navbar-btn mx-4'>About</Nav.Link>   
            <Nav.Link href="#action2" className='navbar-btn mx-4'>Blog</Nav.Link>   
            <Nav.Link href="#action2" className='navbar-btn mx-4'>Contact</Nav.Link>   
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;