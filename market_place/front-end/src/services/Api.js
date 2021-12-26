import axios from 'axios'
import Cookies from 'js-cookie'

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
    ...headers,
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${headers.Authorization || Cookies.get('token')}`,
  },
}));

// eslint-disable-next-line no-unused-vars
const handleCatchError = (error) => {
  if (error.response) {
    console.log(error)
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
}

const handleJwt = (response) => {
  if (response.headers.authorization) {
    const jwt = response.headers.authorization.split(" ")[1]
    Cookies.set('token', jwt)
  }
}

export default class APIManager {

  static async registerUser(email, password, passwordConfirmation, username) {
    const response = await API.post('/users',
      {
        user:
          { email, password, password_confirmation: passwordConfirmation, username, admin: false }
      });
    handleJwt(response)
    console.log("APIManager # RegisterUser =>", response)
    return { ...response.data, status: response.status };
  }

  static async signInUser(email, password) {
    const response = await axios(
      {
        url: 'http://localhost:3000/users/sign_in',
        method: 'post',
        data: { user: { email, password } }
      }
    );
    handleJwt(response)
    console.log("APIManager # signInUser =>", response)
    return { ...response.data, status: response.status };
  }
  static async signInUserJwt() {
    const response = await API.post('/users/sign_in')
    handleJwt(response)
    console.log("APIManager # signInUserJwt =>", response)
    return response.data
  }
  static async signOutUser() {
    const response = await API.delete('/users/sign_out')
    Cookies.remove("token")
    console.log("APIManager # signOutUser =>", response)
    return { ...response.data, status: response.status };
  }
  static async showRealEstateList() {
    const response = await API.get('/real_estates')
    console.log("APIManager # showRealEstateList =>", response)
    return { ...response.data, status: response.status };
  }

  static async showRealEstate(id) {
    const response = await API.get(`/real_estates/${id}`)
    console.log("APIManager # showRealEstate =>", response)
    return { ...response.data, status: response.status };
  }

  static async uploadAvatar(formData) {
    const response = await axios({
      url: `http://localhost:3000/avatars`,
      method: 'post',
      data: formData
    })
    console.log("APIManager # uploadAvatar =>", response)
    return { ...response.data, status: response.status };
  }

  static async createRealEstate(formData) {
    const response = await API({
      url: `http://localhost:3000/real_estates`,
      method: 'post',
      data: formData
    })
    console.log("APIManager # createRealEstate =>", response)
    return { ...response.data, status: response.status };
  }
  static async getAllAvatars() {
    const response = await API.get('/avatars')
    console.log("APIManager # getAllAvatar =>", response)
    return response.data
  }
  static async getUserProfile(id) {
    const response = await API.get(`/users/${id}`)
    console.log("APIManager # getUserProfile =>", response)
    return response.data
  }
  static async updateUserAvatar(fileID, userID) {
    const response = await API.put(`/users/${userID}`, { img_id: fileID })
    console.log("APIManager # updateUserAvatar =>", response)
    return response.data
  }
  static async getAllCities() {
    const response = await API.get(`/cities`)
    console.log("APIManager # getAllCities =>", response)
    return response.data
  }
}
