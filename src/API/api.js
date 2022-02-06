import * as axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "API-KEY": API_KEY
  }
});

export const UsersAPI = {
  getUsers(currentPage, pageSize) {
    return (
      instance.get(`users?page=${ currentPage }&count=${ pageSize }`)
        .then(response => response.data)
    );
  },
  follow(userId) {
    return (
      instance.post(`follow/${ userId }`, {})
        .then(response => response.data)
    );
  },
  unfollow(userId) {
    return (
      instance.delete(`follow/${ userId }`)
        .then(response => response.data)
    );
  }
};

export const ProfileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${ userId }`).then(response => response.data);
  },
  getAuthProfile() {
    return instance.get(`auth/me`).then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status});
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append( 'image', file);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    } ).then(response => response.data);
  },
  saveProfileInfo(profile) {
    return instance.put(`profile`, profile).then(response => response.data);
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`).then(response => response.data);
  }
}

export const LoginAPI = {
  getLogin(email, password, rememberMe, captcha) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then(response => response.data);
  }
}