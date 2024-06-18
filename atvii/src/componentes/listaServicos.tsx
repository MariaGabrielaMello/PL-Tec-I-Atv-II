/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

type state = {
    selectedService: string | null
}

export default class ListaServico extends Component<props, state>{
    constructor(props: props) {
        super(props);
        this.state = {
            selectedService: null
        };
    }

    handleServiceClick = (serviceName: string) => {
        this.setState({ selectedService: serviceName });
    }

    render() {
        let tema = this.props.tema;
        let { selectedService } = this.state;

        return (
            <div className="container-fluid">
                <div className="list-group">
                    {["Servico 1", "Servico 2", "Servico 3", "Servico 4", "Servico 5", "Servico 6"].map((service, index) => (
                        <a key={index} href="#" className="list-group-item list-group-item-action" style={service === "Servico 4" ? { backgroundColor: tema } : {}} onClick={() => this.handleServiceClick(service)}>
                            {service}
                            {selectedService === service && (
                                <div style={{ float: 'right' }}>
                                    <button className="btn btn-primary" style={{ marginRight: "5px" }}>Editar</button>
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
                <h4>Cadastro Serviço</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome do Serviço" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                    <input type="text" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
        <div className="col-md-6">
            <form>
                <h4>Editar Serviço</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome do Serviço" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                    <input type="text" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
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