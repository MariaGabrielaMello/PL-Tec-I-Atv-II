/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

type state = {
    selectedProduto: string | null
}

export default class ListaProduto extends Component<props, state>{
    constructor(props: props) {
        super(props);
        this.state = { selectedProduto: null };
    }

    selectProduto = (produto: string) => {
        this.setState({ selectedProduto: produto });
    }

    render() {
        let tema = this.props.tema;
        let { selectedProduto } = this.state;
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4', 'Produto 5', 'Produto 6'].map((produto, index) => (
                        <a key={index} href="#" className="list-group-item list-group-item-action" onClick={() => this.selectProduto(produto)} style={selectedProduto === produto ? { backgroundColor: tema } : {}}>
                            {produto}
                            {selectedProduto === produto && (
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
                <h4>Cadastro Produto</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome do Produto" aria-describedby="basic-addon1" />
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
                <h4>Editar Produto</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome do Produto" aria-describedby="basic-addon1" />
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