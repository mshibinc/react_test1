import React, { Component } from 'react';
import Nav from './Nav';
import { getSingleUser } from './services/firstService';
// import { useParams } from 'react-router-dom';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            user:[],
            uid:""
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        getSingleUser(id).then(res=>{
            this.setState({
                user:res.data
            })
        }).catch(err=>err)
    }
    inputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const { user } = this.state;
        return (
            <div>
                <Nav />
                <div className="container">
                    <form>
                        {user.map(users=>(
                        <div className="row" key={users.id}>
                            <div className="col-5">
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input type="text" name="name" value={users.firstName} onChange={this.inputChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="email" name="email" value={users.emailId} onChange={this.inputChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input type="text" name="password" value={users.password} onChange={this.inputChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <button onClick={this.register} className="btn btn-success">Save</button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </form>
                </div>
            </div>
        )
    }

}
export default Edit;