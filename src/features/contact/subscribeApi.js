import Axios from "src/libs/axios";

export function createSubscribe({email}){
    return Axios.post('/subscribe/create', {email});
}