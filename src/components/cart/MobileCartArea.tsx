import { useContext } from "react"
import MovieItemCart from "./MovieItemCart"
import Button from "../tags/Button"
import Div from "../tags/Div"
import Line from "../tags/Line"
import Span from "../tags/Span"
import Ul from "../tags/Ul"
import { MovieContext } from "@/context/cart"
import { priceFormatter } from "@/utils/priceFormatter"

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
        <Div customStyles={{width: '100%', display: 'flex', flexDirection: 'column', gap: '24px'}}>
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

            <Div customStyles={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
                <Div customStyles={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                    <Span customStyles={{textTransform: 'uppercase', fontWeight: '700'}}>Total</Span>
                    <Span customStyles={{color: 'black', fontSize: '1.5rem', fontWeight: '700'}}>{ getTotalPrice() }</Span>
                </Div>

                <Button customStyles={{textDecoration: 'uppercase', maxWidth: '100%'}} disabled={movies.length == 0} onClick={handleCompleteOrder}>Finalizar Pedido</Button>
            </Div>
        </Div>
    )
}