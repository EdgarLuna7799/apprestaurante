import Axios from 'axios';

export default Axios.create({
    baseURL: "https://app-restaurantemonteverde.herokuapp.com/api/" 
})