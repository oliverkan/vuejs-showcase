import axios from 'axios';
import authHeader from "../util/authHeader";

const API_URL = process.env.VUE_APP_API_ADDRESS;

class UserService {
    getUserDetail(id) {
        return axios
            .get(`${API_URL}/user/detail/${id}`, {headers: authHeader()}).then(response => {
                return response.data;
            });
    }
}

export default new UserService();