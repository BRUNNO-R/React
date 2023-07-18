// menu.jsx
import React, { Component } from 'react';
import './index.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    };
  }

  toggleOptions = () => {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions
    }));
  };

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#">Meu Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {this.props.menuItems.map((menuItem, index) => (
                <Nav.Link key={index} href={menuItem.link}>
                  {menuItem.title}
                </Nav.Link>
              ))}
              <NavDropdown
                title="Produto"
                id="productDropdown"
                show={this.state.showOptions}
                onClick={this.toggleOptions}
              >
                <NavDropdown.Item href="#">Cadastrar</NavDropdown.Item>
                <NavDropdown.Item href="#">Editar</NavDropdown.Item>
                <NavDropdown.Item href="#">Deletar</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#">Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
