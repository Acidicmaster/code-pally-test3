const axios = require('axios');

const axiosInstance = axios.default.create({
    baseURL: 'https://jsonplaceholder.typicode.com/albums'
}).catch(
     (error)=> {
      console.log(error.message)
      return Promise.reject(error)
    })

module.exports = axiosInstance;