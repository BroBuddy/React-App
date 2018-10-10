import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem } from 'reactstrap';
import App from './App/App';
import Todo from './Todo/Todo';
import Counter from './Counter/Counter';
import Bmi from './Bmi/Bmi';
import Wikipedia from './Wiki/Wiki';
import WikipediaResult from './Wiki/WikiResult';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <HashRouter>
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">ReactJS</NavbarBrand>

                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/todo" className="nav-link">Todo</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/count" className="nav-link">Counter</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/bmi" className="nav-link">BMI</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/wiki" className="nav-link">Wikipedia</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            
            <Route exact={ true } path='/' component={ App } />
            <Route path='/todo' component={ Todo } />
            <Route path='/count' component={ Counter } />
            <Route path='/bmi' component={ Bmi } />
            <Route path='/wiki' component={ Wikipedia } />
            <Route path='/wiki-result/:search' component={ WikipediaResult } />
        </div>
    </HashRouter>,
    document.getElementById('root')
);
registerServiceWorker();
