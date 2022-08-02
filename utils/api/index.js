import axios from "axios"

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_GATEWAY,
})

axiosClient.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    return error
  }
)

export class AxiosModel {
  constructor(lib) {
    this.lib = lib
  }
  get(uri, params = {}, headers = {}) {
    return this.lib.get(uri, { params, headers })
  }
  post(uri, body = {}, headers = {}) {
    return this.lib.post(uri, body, { ...headers })
  }
  put(uri, body = {}) {
    return this.lib.put(uri, body)
  }
  delete(uri, body = {}) {
    return this.lib.delete(uri, { data: body })
  }
}

const axiosFetch = new AxiosModel(axiosClient)
export default axiosFetch
