'use client'

import Container from "@/components/Container"
import HeaderComponent from "../components/HeaderComponent"
import MovieProvider from "../context/cart"

export default function DefaultLayout({ children }: { children: React.ReactNode }){
    return (
        <MovieProvider>
            <Container>
                <HeaderComponent />
                {children}
            </Container>
        </MovieProvider>
    )
}