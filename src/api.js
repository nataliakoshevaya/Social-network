import axios from 'axios';
import { login } from './redux/auth-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',  
    withCredentials: true,
    headers: {
        'API-KEY': 'ff53baa0-3458-4df0-9d39-8dbd70a6154b'
    }
});

export const getUsers = {
    getUser(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },

    followUsers(id) {
        return instance.post(`/follow/${id}`)
        .then(response => response.data);
    },

    unfollowUsers(id) {
        return instance.delete(`/follow/${id}`)
                .then(response => response.data);
    }
};

export const authUser = {
    getAuthUser() {
        return instance.get('/auth/me')    
                .then(response => response.data);        
    },

    login(email, password, rememberMe = false) {
        return instance.post('/auth/login', { email, password, rememberMe });
    },

    logout() {
        return instance.delete('/auth/login');
    }
};
   

export const ProfileAPI = {
    setUserProfile(userId) {
        return instance.get(`/profile/` + userId)
          .then(response => response.data);
    },     

    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)    
          .then(response => response.data);         
    },

    updateStatus(status) {
        return instance.put('/profile/status/', {status: status})    
          .then(response => response.data);          
    }
};
