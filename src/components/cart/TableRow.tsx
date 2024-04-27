'use client'

import { priceFormatter } from "@/utils/priceFormatter"
import AddQuantity from "../../../public/AddQuantity"
import RemoveQuantity from "../../../public/RemoveQuantity"
import TrashIcon from "../../../public/TrashIcon"
import Button from "../tags/Button"
import Div from "../tags/Div"
import Td from "../tags/Td"
import { MovieContext, MovieInfo } from "@/context/cart"
import { useContext, useState } from "react"
import Image from "../tags/Image"
import Span from "../tags/Span"

interface TableRowProps {
    item: MovieInfo;
}

export default function TableRow({ item }: TableRowProps){

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
        <tr className={`${classAnimation ? 'fadeIn' : 'fadeOut'}`}>
            <Td>
                <Div customStyles={{display: 'flex', alignItems: 'center', gap: '1rem', width: 'fit-content'}}>
                    <Image src={item.movie.image} alt={item.movie.title} width={91} height={114} />

                    <Div customStyles={{display: 'flex', flexDirection: 'column'}}>
                        <Span customStyles={{fontWeight: '700', fontSize: '0.875rem', color: 'black'}}>{item.movie.title}</Span>
                        <Span customStyles={{fontWeight: '700', fontSize: '0.875rem', color: 'black'}}>{priceFormatter(item.movie.price)}</Span>
                    </Div>
                </Div>
            </Td>

            <Td customStyles={{color: 'black'}}>
                <Div customStyles={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Button variant="secondary" onClick={() => decreaseQuantity(item)} disabled={item.quantity == 1}>
                        <RemoveQuantity />
                    </Button>

                    {item.quantity}

                    <Button variant="secondary" onClick={() => increaseQuantity(item)}>
                        <AddQuantity />
                    </Button>
                </Div>
            </Td>

            <Td customStyles={{color: 'black'}}>{ getPriceItem(item) }</Td>

            <Td>
                <Button variant='secondary' onClick={() => onRemoveItem(item)}>
                    <TrashIcon />
                </Button>
            </Td>
        </tr>
    )
}