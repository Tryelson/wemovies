import { priceFormatter } from "@/utils/priceFormatter";
import AddQuantity from "../../../public/AddQuantity";
import RemoveQuantity from "../../../public/RemoveQuantity";
import TrashIcon from "../../../public/TrashIcon";
import Button from "../tags/Button";
import Div from "../tags/Div";
import Li from "../tags/Li";
import Span from "../tags/Span";
import Image from "../tags/Image";
import { MovieContext, MovieInfo } from "@/context/cart";
import { useContext, useState } from "react";

interface MovieItemCartProps {
    item: MovieInfo;
}

export default function MovieItemCart({ item }: MovieItemCartProps){

    const { decreaseQuantity, increaseQuantity, removeMovie } = useContext(MovieContext);
    const [classAnimation, setClassAnimation] = useState(true)

    function getPriceItem(item: MovieInfo) {
        const total = item.quantity * item.movie.price;
        const formattedPrice = priceFormatter(total);
        return formattedPrice;
    }

    function onRemoveItem(item: MovieInfo){
        setClassAnimation(false)

        setTimeout(() => {
            removeMovie(item)
        }, 400)
    }

    return (
        <Li className={`${classAnimation ? 'fadeIn' : 'fadeOut'}`}>
            <Div customStyles={{display: 'flex', width: '100%', gap: '1rem', justifyContent: 'space-between'}}>
                <Image src={item.movie.image} alt={item.movie.title} width={64} height={82} />
                
                <Div customStyles={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%'}}>
                    <Div customStyles={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', gap: '5px'}}>
                        <Span customStyles={{fontWeight: '700', fontSize: '0.875rem', color: 'black'}}>{item.movie.title}</Span>

                        <Div customStyles={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                            <Span customStyles={{fontWeight: '700', fontSize: '0.875rem', color: 'black'}}>{priceFormatter(item.movie.price)}</Span>

                            <Button variant='secondary' onClick={() => onRemoveItem(item)}>
                                <TrashIcon />
                            </Button>
                        </Div>
                    </Div>

                    <Div customStyles={{width: '100%', display: 'flex', justifyContent: 'space-between', gap: '5px'}}>
                        <Div customStyles={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.5rem' }}>
                            <Button variant="secondary" customStyles={{padding: '0'}} onClick={() => decreaseQuantity(item)} disabled={item.quantity == 1}>
                                <RemoveQuantity />
                            </Button>

                            <Div customStyles={{border: '1px solid #D9D9D9', width: '60px', textAlign: 'center', borderRadius: '5px', fontSize: '0.875rem'}}>
                                {item.quantity}
                            </Div>

                            <Button variant="secondary" customStyles={{padding: '0'}} onClick={() => increaseQuantity(item)}>
                                <AddQuantity />
                            </Button>
                        </Div>

                        <Div customStyles={{display: 'flex', flexDirection: 'column'}}>
                            <Span customStyles={{fontWeight: 'bold', color: '#999999'}}>SubTotal</Span>
                            <Span customStyles={{color: 'black', fontWeight: 'bold'}}>{ getPriceItem(item) }</Span>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Li>
    )
}