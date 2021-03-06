import React from 'react'
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../header/Header';
import Login from '../../modules/login/Login';
import Ventas from '../../modules/ventas/Ventas'
import Inicio from '../../modules/Inicio';
import editarProductos from '../../modules/productos/editarProductos';
import Tablaproductos from '../../modules/productos/tabla/Tablaproductos';
import agregarProductos from '../../modules/productos/agregarProductos';
import Usuarios from '../../modules/usuarios/usuarios';
import AjustePerfil from '../../modules/usuarios/AjustePerfil';
import Editar from '../../modules/ventas/Editar';
import Listar from '../../modules/ventas/Listar';
import Crear from '../../modules/ventas/Crear';

function Sidebar() {
  const pathname = window.location.pathname;
  if (pathname === "/login") {
    return <Login />
  }
  return <IsSidebar />;
}

const IsSidebar = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block text-white bg-dark sidebar collapse">
            <div className=" position-sticky pt-3">
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <NavLink className="nav-link link-light" exact to="/inicio">
                    <i className="bi-house-fill me-2"></i>
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link-light" exact to="/productos/tabla">
                    <i className="bi-grid me-2"></i>
                    Productos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link-light" exact to="/ventas">
                    <i className="bi-table me-2"></i>
                    Ventas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link-light" exact to="/usuarios">
                    <i className="bi-person-circle me-2"></i>
                    Gestion de Usuarios
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div className="b-example-divider"></div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/inicio" component={Inicio} />
              <Route exact path="/productos/agregar-productos" component={agregarProductos} />
              <Route exact path="/productos/editar-productos" component={editarProductos} />
              <Route exact path="/productos/tabla" component={Tablaproductos} />
              <Route exact path="/ventas" component={Ventas} />
              <Route exact path="/ventas/editar" component={Editar} />
              <Route exact path="/ventas/listar" component={Listar} />
              <Route exact path="/ventas/crear" component={Crear} />
              <Route exact path="/usuarios" component={Usuarios} />
              <Route exact path="/usuarios/ajuste-perfil" component={AjustePerfil} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default Sidebar
