/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

type state = {
    selectedCliente: string | null
}

export default class ListaCliente extends Component<props, state>{
    constructor(props: props) {
        super(props);
        this.state = { selectedCliente: null };
    }

    selectCliente = (cliente: string) => {
        this.setState({ selectedCliente: cliente });
    }

    render() {
        let tema = this.props.tema;
        let { selectedCliente } = this.state;
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4', 'Cliente 5', 'Cliente 6'].map((cliente, index) => (
                        <a key={index} href="#" className="list-group-item list-group-item-action" onClick={() => this.selectCliente(cliente)} style={selectedCliente === cliente ? { backgroundColor: tema } : {}}>
                            {cliente}
                            {selectedCliente === cliente && (
                                <div style={{ float: 'right' }}>                                    
                                    <button className="btn btn-danger">Remover</button>
                                </div>
                            )}
                        </a>
                    ))}
                </div>
                <br></br>
                <div className="container">
    <div className="row">
        <div className="col-md-6">
            <form>
                <h4>Cadastrar Cliente</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
        <div className="col-md-6">
            <form>
                <h4>Editar Cliente</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    </div>
</div>
            </div>
        )
    }
}