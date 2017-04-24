import axios from 'axios'

export default {
  getSDEInfo () {
    return axios.get('/sde/')
  }
}