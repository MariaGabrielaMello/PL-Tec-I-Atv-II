/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaTodos extends Component<props>{
    render() {
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <h4>Maior Consumo (Quantidade)</h4>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 3</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 4</a>
                </div>
                <div className="list-group">
                    <h4>Maior Consumo (Valor)</h4>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 3</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 4</a>
                </div>
                <div className="list-group">
                    <h4>Produtos Mais Consumidos</h4>
                    <a href="#" className="list-group-item list-group-item-action">Produto 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 3</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 4</a>
                </div>
                <div className="list-group">
                    <h4>Serviços Mais Consumidos</h4>
                    <a href="#" className="list-group-item list-group-item-action">Serviço 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviço 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviço 3</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviço 4</a>
                </div>
                <div className="list-group">
                    <h4>Maior Consumo Por Tipo e Raça do Pet</h4>
                    <a href="#" className="list-group-item list-group-item-action">Produto 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 3</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 4</a>
                </div>
            </div>
        )
    }
}