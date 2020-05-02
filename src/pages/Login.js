import React, { Component } from 'react';
import {userLogin} from './services/firstService'
class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    inputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login=(e)=>{
        e.preventDefault();
        userLogin(this.state).then(res=>{
            if(res.data==="login error"){
                alert("login unsuccess")
            }
            else{
                console.log(res.data.id)
                localStorage.setItem('userid', res.data.id);
            }
            // console.log(res.data)
        }).catch(err=>err)
        
    }
    render(){
        return(
            <div className="container">
                <form>
                        <div className="row">
                            <div className="col-5">
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input type="email" name="email"  onChange={this.inputChange} className="form-control" />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input type="text" name="password"  onChange={this.inputChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <button onClick={this.login} className="btn btn-success">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
        )
    }
}
export default Login;