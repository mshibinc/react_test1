import React, { Component } from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";
import { getUser, deleteUsers } from './services/firstService'
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
            // name:"",
            // email:""
            // password:""
        }
    }
    // register=(e)=>{
    //     e.preventDefault();
    //     createUser(this.state).then(res=>{
    //         res.data === 'success' ? alert(res.data) : alert(res.data);
    //     }).catch(err => err);
    // }
    componentDidMount() {
        getUser().then(res => {
            this.setState({
                user: res.data
            })
        }).catch(err => err);
    }
    deleteUser = (id) => {
        deleteUsers(id).then(res => {
            res.data === 'success' ? alert(res.data) : alert(res.data);
        }).catch(err => err)
    }
    render() {
        const { user } = this.state;
        let i = 1;
        return (
            <div>
                <Nav />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map(users => (
                            <tr key={users.id}>
                                <td>{i++}</td>
                                <td>{users.firstName}</td>
                                <td>{users.emailId}</td>
                                <td>
                                    <button onClick={() => this.deleteUser(users.id)}>Delete</button>
                                    <Link to={"./edit/" + users.id} ><button>Edit</button></Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Users