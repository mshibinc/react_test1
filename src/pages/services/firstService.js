// import axios from 'axios';
import http from "../../http-common";
// let api="http://localhost/angularEmployee/Clinic/";
// export function createUser(data){
//     axios.post(api+'create',data).then(response=>{
//         return response.data;
//         // response.data === 'success' ? alert(response.data) : alert(response.data);
//     }).catch(err => err);
// }
// export function createUser(data){
//     return fetch(api+'create', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         // mode: 'CORS',
//         body: JSON.stringify(data)
//     }).then(response => {
//         return response.json();
//     }).catch(err => err);
// }
export function createUser(data){
    return http.post("/create", data);
}
export function getUser(){
    return http.get("/index");
}
export function deleteUsers(id){
    return http.delete('/delete/'+id);
}
export function getSingleUser(id){
return http.post("/single/"+id);
}
export function userLogin(data){
    return http.post("/userLogin",data);
}