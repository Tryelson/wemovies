import Image from "next/image";
import H2 from "./tags/H2";
import Line from "./tags/Line";
import Button from "./tags/Button";
import { useRouter } from "next/navigation";
import Flex from "./tags/Flex";

export default function EmptyPage(){

    const router = useRouter()

    function reloadPage(){
        router.refresh()
    }

    return (
        <Flex customStyles={{backgroundColor: 'white', width: '100%', height: '100%', borderRadius: '4px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 0px 143px'}} className="fadeIn">
            <Flex customStyles={{width: '100%', flexDirection: 'column', gap: '24px', alignItems: 'center'}}>
                <H2 customStyles={{fontSize: '1.25rem', fontWeight: 'bold'}}>Parece que não há nada por aqui :(</H2>

                <Image src={'/empty-page.png'} alt="Página está vazia!" width={180} height={265} priority />
                
                <Line customStyles={{margin: '0 auto', maxWidth: '447px'}} />
            </Flex>

            <Button customStyles={{marginTop: '24px', fontWeight: '700'}} onClick={reloadPage}>
                Recarregar Página
            </Button>
        </Flex>
    )
}