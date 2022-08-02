import env from "../../utils/config"
import fetch from "../../utils/api"

class DogAPI {
  static getDogImage(params) {
    let url = `${env.apiGateway}/image/random${params ? `/` + params : ''}`
    return fetch.get(url)
  }
}

export default DogAPI
