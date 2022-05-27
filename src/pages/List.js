import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import ContatosService from '../services/ContatosService'
import { Link } from 'react-router-dom'

export default class List extends React.Component { 

    constructor(){
        super()
        this.contatosService = new ContatosService()
        this.state = {
            contatos: []
        }
    }

    componentDidMount(){
        this.updateTable()
    }

    updateTable(){
        this.contatosService.findAll()
        .then(response => {
            this.setState ({
                contatos: response.data
            })
        })
    }

    delete(id){
        this.contatosService.delete(id)
        .then(response => {
            this.updateTable()
            M.toast({html: 'Contato deletado com sucesso'})
        })
    }

    render(){
        return (
            
            <div className="container">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Contatos API</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to="/form">Novo Contato</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th>Opções</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                this.state.contatos.map( contato => (
                                    <tr key={contato.id}>
                                        <td>{contato.nome}</td>
                                        <td>{contato.telefone}</td>
                                        <td>{contato.email}</td>
                                        <td>
                                            <Link to={`/form/${contato.id}`}><i className="material-icons">edit</i></Link>
                                            <a href='#' onClick={() => this.delete(contato.id)}><i className="material-icons">delete</i></a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        
        )
    }
}
