import Axios from 'axios';

export default Axios.create({
    baseURL: "https://app-backendd.herokuapp.com/api/"
})