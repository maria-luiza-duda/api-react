import axios from 'axios'

export default class ContatosService {

    constructor(){
        this.urlApi = 'http://20.201.113.240/api/contatos/'
    }

    findAll() {
        return axios.get(this.urlApi)
    }

    findById(id) {
        return axios.get(`${this.urlApi}/${id}`)
    }

    delete(id) {
        return axios.delete(`${this.urlApi}/${id}`)
    }

    save(contato) {
        return axios.post(this.urlApi, contato)
    }

    update(contato) {
        return axios.put(`${this.urlApi}/${contato.id}`, contato)
    }

}