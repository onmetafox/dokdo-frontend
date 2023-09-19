import Axios from "src/libs/axios";

export function createContact({email, name, phone, comment}){
    return Axios.post('/contact/create', {email, name, comment, phone});
}