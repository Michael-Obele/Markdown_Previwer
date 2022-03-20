import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import logo from './logo.svg';

const Header = (props) => {
  const DarkMode = useSelector((state) => state.DarkMode);
  const changeBG = () => {
    return DarkMode ? 'dark' : 'light';
  };
  return (
    <Navbar bg={changeBG()} variant={changeBG()} expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          <span className='logoName'>MiChaelIsH</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='https://moaconcept.xyz'>Main Site</Nav.Link>
            <Nav.Link active>Markdown</Nav.Link>
          </Nav>
          {props.children}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
