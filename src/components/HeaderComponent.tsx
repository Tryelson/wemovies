'use client'

import H1 from "./tags/H1"
import Container from "./Container"
import H2 from "./tags/H2"
import Header from "./tags/Header"
import Div from "./tags/Div"
import Span from "./tags/Span"
import Link from "./tags/Link"
import { useContext } from "react"
import { MovieContext } from "../context/cart"
import CartIcon from "../../public/header/CartIcon"

export default function HeaderComponent(){

    const { movies } = useContext(MovieContext)

    return (
        <Header customStyles={{display: 'flex', justifyContent: 'space-between'}}>
            <Link href="/">
                <H1>WeMovies</H1>
            </Link>

            <Div customStyles={{display: 'flex', gap: '16px', alignItems: 'center', marginRight: '15px'}}>
                <Div customStyles={{display: 'flex', flexDirection: 'column'}}>
                    <H2>Meu Carrinho</H2>
                    <Span customStyles={{textAlign: 'right'}}>{ movies.length } itens</Span>
                </Div>

                <Link href="/cart">
                    <CartIcon />
                </Link>
            </Div>
        </Header>
    )
}