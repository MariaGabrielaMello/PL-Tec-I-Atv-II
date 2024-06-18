/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaCompra extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Compra 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Compra 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Compra 3</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }} >Compra 4</a>
                    <a href="#" className="list-group-item list-group-item-action">Compra 5</a>
                    <a href="#" className="list-group-item list-group-item-action">Compra 6</a>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <h4>Comprar Produto</h4>
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
                            <h4>Comprar Serviço</h4>
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
                </div>
            </div>
        )
    }
}