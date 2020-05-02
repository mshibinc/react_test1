import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {createUser} from './services/firstService';
import Nav from './Nav';    
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:""
        }
    }
    inputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    register=(e)=>{
        e.preventDefault();
        createUser(this.state).then(res=>{
            res.data === 'success' ? alert(res.data) : alert(res.data);
        }).catch(err => err);
    }
    
    render() {
        return (
            <div>
                 <Nav/>
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-5">
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" name="name" onChange={this.inputChange} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" name="email" onChange={this.inputChange} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" name="password" onChange={this.inputChange} className="form-control" />
                            </div>
                            <div className="form-group">
                                <button onClick={this.register} className="btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>

        );
    }
}
export default Home;