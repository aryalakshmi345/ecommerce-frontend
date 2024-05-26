import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth'

function Header() {
  const [auth,setAuth] = useAuth()
  const handleLogout = ()=>{
    setAuth({
      ...auth,
      user:null,
      token:""
    })
    sessionStorage.removeItem('auth')
  }
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ECOMMERCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link style={{textDecoration:"none",color:'black'}} to={'/'}>Home</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:"none",color:'black'}} to={'/category'}>Category</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:"none",color:'black'}} to={'/cart'}>Cart(0)</Link></Nav.Link>
           { !auth.user ? (
            <>
              <Nav.Link>
              <Link style={{textDecoration:"none",color:'black'}} to={'/register'}>SignUp</Link>
              </Nav.Link>
              <Nav.Link>
                <Link  style={{textDecoration:"none",color:'black'}} to={'/login'}>Login</Link>
                </Nav.Link>
            </>
           ): 
           <NavDropdown title={auth?.user?.name} id="basic-nav-dropdown">
              <NavDropdown.Item>
              <Nav.Link>
              <Link  style={{textDecoration:"none",color:'black'}} to={`/dashboard/${auth?.user?.role === 1? 'admin':'user'}`}>Dsahboard</Link>
              </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Nav.Link>
              <Link onClick={handleLogout} style={{textDecoration:"none",color:'black'}} to={'/login'}>Logout</Link>
              </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>         

              }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header