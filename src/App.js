import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Edit from './pages/Edit';
import Login from './pages/Login';
 class App extends Component{
   render(){
     return(
       <Router>
         <div>
           <Route exact path="/" component={Home}/>
           <Route path="/users" component={Users}/>
           <Route path="/login" component={Login}/>
           <Route path="/edit/:id" component={Edit}/>
         </div>
       </Router>
     );
   }
 }
 export default App