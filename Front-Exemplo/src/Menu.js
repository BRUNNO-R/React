import React, { Component } from "react";
import Produtos from "./Produto";
class Menu extends Component    {
    render() {
      return (
        <div className="Menu">
          <ul>
        <li><a href="#">Login</a></li>
        <li><a href="#">Signup</a></li>
        <li><a href="#">Produtos</a>
          <Produtos /> {}
        </li>
      </ul>
        </div>
      );
    }
  }
  export default Menu
