'use client'

import Button from "./tags/Button"
import Div from "./tags/Div"
import H2 from "./tags/H2"
import Line from "./tags/Line"
import Image from "next/image"
import Link from "./tags/Link"
import Span from "./tags/Span"
import { useState, useEffect } from "react"

export default function CompleteOrder(){

    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        setWindowWidth(window.innerWidth);

        return () => window.removeEventListener('resize', handleResize);
    }, []); 

    return (
        <Div customStyles={{backgroundColor: 'white', width: '100%', height: '100%', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: `${windowWidth <= 480 ? '64px 16px' : '64px 16px 143px'}`, paddingInline: '1rem'}} className="fadeIn">
            <Div customStyles={{width: '100%', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center'}}>
                <Span customStyles={{fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'center', color: 'black'}}>Compra Realizada com sucesso!</Span>

                <Image style={{width: '100%', maxWidth: '294px'}} src={'/success-img.png'} alt="Página está vazia!" width={294} height={307} priority />
                
                <Line customStyles={{margin: '0 auto', maxWidth: '447px'}} />
            </Div>

            <Button customStyles={{marginTop: '24px', textTransform: 'uppercase', fontWeight: '700'}}>
                <Link href="/">
                    Voltar
                </Link>
            </Button>
        </Div>
    )
}