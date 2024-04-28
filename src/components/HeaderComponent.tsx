'use client'

import H1 from "./tags/H1"
import H2 from "./tags/H2"
import Header from "./tags/Header"
import Span from "./tags/Span"
import Link from "./tags/Link"
import { useContext } from "react"
import { MovieContext } from "../context/cart"
import CartIcon from "../../public/header/CartIcon"
import Flex from "./tags/Flex"

export default function HeaderComponent(){

    const { movies } = useContext(MovieContext)

    return (
        <Header customStyles={{display: 'flex', justifyContent: 'space-between'}}>
            <Link href="/">
                <H1>WeMovies</H1>
            </Link>

            <Flex customStyles={{gap: '16px', alignItems: 'center', marginRight: '15px'}}>
                <Flex customStyles={{flexDirection: 'column'}}>
                    <H2>Meu Carrinho</H2>
                    <Span customStyles={{textAlign: 'right'}}>{ movies.length } itens</Span>
                </Flex>

                <Link href="/cart">
                    <CartIcon />
                </Link>
            </Flex>
        </Header>
    )
}