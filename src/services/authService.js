import axios from 'axios';

const API_URL = process.env.VUE_APP_API_ADDRESS;
class AuthService {
    login(user) {
        return axios
            .post(API_URL + '/auth/login', {
                userName: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    console.log(response.data);
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + '/auth/signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();