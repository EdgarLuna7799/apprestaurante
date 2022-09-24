import Axios from 'axios';

export default Axios.create ({
    baseURL: "https://app-montverde.herokuapp.com/api/"
})