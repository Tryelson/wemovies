import Image from "next/image";
import Div from "./tags/Div";
import H2 from "./tags/H2";
import Line from "./tags/Line";
import Button from "./tags/Button";
import { useRouter } from "next/navigation";

export default function EmptyPage(){

    const router = useRouter()

    function reloadPage(){
        router.refresh()
    }

    return (
        <Div customStyles={{backgroundColor: 'white', width: '100%', height: '100%', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 0px 143px'}} className="fadeIn">
            <Div customStyles={{width: '100%', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center'}}>
                <H2 customStyles={{fontSize: '1.25rem', fontWeight: 'bold'}}>Parece que não há nada por aqui :(</H2>

                <Image src={'/empty-page.png'} alt="Página está vazia!" width={180} height={265} priority />
                
                <Line customStyles={{margin: '0 auto', maxWidth: '447px'}} />
            </Div>

            <Button customStyles={{marginTop: '24px', fontWeight: '700'}} onClick={reloadPage}>
                Recarregar Página
            </Button>
        </Div>
    )
}