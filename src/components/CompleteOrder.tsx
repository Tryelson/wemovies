'use client'

import Button from "./tags/Button"
import Line from "./tags/Line"
import Image from "next/image"
import Span from "./tags/Span"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Flex from "./tags/Flex"

export default function CompleteOrder(){

    const router = useRouter()
    const [windowWidth, setWindowWidth] = useState<number>(0);

    function goBack(){
        router.push('/')
    }

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        setWindowWidth(window.innerWidth);

        return () => window.removeEventListener('resize', handleResize);
    }, []); 

    return (
        <Flex customStyles={{backgroundColor: 'white', width: '100%', height: '100%', borderRadius: '4px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: `${windowWidth <= 480 ? '64px 16px' : '64px 16px 143px'}`, paddingInline: '1rem'}} className="fadeIn">
            <Flex customStyles={{width: '100%', flexDirection: 'column', gap: '24px', alignItems: 'center'}}>
                <Span customStyles={{fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'center', color: 'black'}}>Compra Realizada com sucesso!</Span>

                {windowWidth >= 480 ? (
                    <Image src={'/success-img.png'} alt="Página está vazia!" width={294} height={307} priority />
                ) : (
                    <Image src={'/success-img.png'} alt="Página está vazia!" width={238} height={247} priority />
                )}
                
                <Line customStyles={{margin: '0 auto', maxWidth: '447px'}} />
            </Flex>

            <Button customStyles={{marginTop: '24px', textTransform: 'uppercase', fontWeight: '700'}} onClick={goBack}>
                Voltar
            </Button>
        </Flex>
    )
}