/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

type state = {
    selectedPet: string | null
}

export default class ListaPet extends Component<props, state>{
    constructor(props: props) {
        super(props);
        this.state = { selectedPet: null };
    }

    selectPet = (pet: string) => {
        this.setState({ selectedPet: pet });
    }

    render() {
        let tema = this.props.tema;
        let { selectedPet } = this.state;
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {['Pet 1', 'Pet 2', 'Pet 3', 'Pet 4', 'Pet 5', 'Pet 6'].map((pet, index) => (
                        <a key={index} href="#" className="list-group-item list-group-item-action" onClick={() => this.selectPet(pet)} style={selectedPet === pet ? { backgroundColor: tema } : {}}>
                            {pet}
                            {selectedPet === pet && (
                                <div style={{ float: 'right' }}>
                                    <button className="btn btn-primary" style={{ marginRight: '5px' }}>Editar</button>
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
                <h4>Cadastro Pet</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF do tutor" aria-label="CPF do tutor" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tipo do pet" aria-label="Tipo do Pet" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Raça do pet" aria-label="Raça do Pet" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
        <div className="col-md-6">
            <form>
                <h4>Editar Pet</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF do tutor" aria-label="CPF do tutor" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tipo do pet" aria-label="Tipo do Pet" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Raça do pet" aria-label="Raça do Pet" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Editar</button>
                </div>
            </form>
        </div>
    </div>
</div>
            </div>
        )
    }
}