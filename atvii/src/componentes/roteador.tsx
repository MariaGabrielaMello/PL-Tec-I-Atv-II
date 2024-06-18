import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import ListaProduto from "./listaProdutos"
import ListaServico from "./listaServicos"
import ListaPet from "./listaPets"
import ListaCompra from "./listaCompras"
import ListaTodos from "./listagem";
import Home from "./Home";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Home','Clientes', 'Produtos', 'Servicos', 'Pets', 'Compras', 'Listar']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )

        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" />
                </>
            )

        } else if (this.state.tela === 'Servicos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" />
                </>
            )

        } else if (this.state.tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPet tema="#e3f2fd" />
                </>
            )

        } else if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Home />
                </>
            )

        } else if (this.state.tela === 'Compras') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCompra tema="#e3f2fd" />
                </>
            )

        } else {
            return (
                <>
                    {barraNavegacao}
                    <ListaTodos tema="#e3f2fd"/>
                </>
            )
        }
    }
}