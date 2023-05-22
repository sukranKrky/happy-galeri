import axios from 'axios'

export default class imageService  {

    getImage(id) {
        return axios.get("https://w3yz.com/api/ch#/")
        .then(response => response.data.products[id].imagelist[0].url)

    }
}

