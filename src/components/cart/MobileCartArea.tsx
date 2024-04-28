import { useContext } from "react"
import MovieItemCart from "./MovieItemCart"
import Button from "../tags/Button"
import Line from "../tags/Line"
import Span from "../tags/Span"
import Ul from "../tags/Ul"
import { MovieContext } from "@/context/cart"
import { priceFormatter } from "@/utils/priceFormatter"
import Flex from "../tags/Flex"

interface MobileCartAreaProps {
    handleIsOrderCompleted: () => void;
}

export default function MobileCartArea({ handleIsOrderCompleted }: MobileCartAreaProps){

    const { movies, completeOrder } = useContext(MovieContext);

    function handleCompleteOrder(){
        handleIsOrderCompleted()
        completeOrder()
    }

    function getTotalPrice(){
        let totalPrice = 0
        movies.forEach((item) => {
            totalPrice += item.quantity * item.movie.price
        });

        const formattedPrice = priceFormatter(totalPrice);
        return formattedPrice;
    }

    return (
        <Flex customStyles={{width: '100%', flexDirection: 'column', gap: '24px'}}>
            <Ul customStyles={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {movies.map((item) => {
                    return (
                        <MovieItemCart key={item.movie.id} item={item} />
                    )
                })}

                {movies.length == 0 && (
                    <Span customStyles={{color: 'black', fontWeight: 'bold', fontSize: '1rem'}}>Você ainda não possui itens no carrinho!</Span>
                )}
            </Ul>

            <Line />

            <Flex customStyles={{flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
                <Flex customStyles={{justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                    <Span customStyles={{textTransform: 'uppercase', fontWeight: '700'}}>Total</Span>
                    <Span customStyles={{color: 'black', fontSize: '1.5rem', fontWeight: '700'}}>{ getTotalPrice() }</Span>
                </Flex>

                <Button customStyles={{textDecoration: 'uppercase', maxWidth: '100%'}} disabled={movies.length == 0} onClick={handleCompleteOrder}>Finalizar Pedido</Button>
            </Flex>
        </Flex>
    )
}