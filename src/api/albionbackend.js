import axios from 'axios'

export default {
  getSDEInfo () {
    return axios.get('/api/sde/')
  }
}