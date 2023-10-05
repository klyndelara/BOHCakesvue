import axios from "axios";
export default {
    getCupcakes() {
        return axios.get('http://localhost:8080/cupcakes')
    }
}