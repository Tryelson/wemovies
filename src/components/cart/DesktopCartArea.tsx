import Button from "../tags/Button"
import Div from "../tags/Div"
import Line from "../tags/Line"
import Table from "../tags/Table"
import TableRow from "./TableRow"
import { useContext } from "react"
import { MovieContext } from "@/context/cart"
import { priceFormatter } from "@/utils/priceFormatter"
import Span from "../tags/Span"
import Td from "../tags/Td"

interface DesktopCartAreaProps {
    handleIsOrderCompleted: () => void;
}

export default function DesktopCartArea({ handleIsOrderCompleted }: DesktopCartAreaProps){

    const { movies, completeOrder } = useContext(MovieContext);

    function getTotalPrice(){
        let totalPrice = 0
        movies.forEach((item) => {
            totalPrice += item.quantity * item.movie.price
        });

        const formattedPrice = priceFormatter(totalPrice);
        return formattedPrice;
    }

    function handleCompleteOrder(){
        handleIsOrderCompleted()
        completeOrder()
    }

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>QTD</th>
                        <th>SubTotal</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {movies.map((item) => {
                        return (
                            <TableRow key={item.movie.id} item={item} />
                        )
                    })}
                    {movies.length == 0 && (
                        <tr>
                            <Td customStyles={{color: 'black'}}>Você ainda não possui itens no carrinho!</Td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <Line />
            
            <Div customStyles={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '24px'}}>
                <Button customStyles={{textDecoration: 'uppercase'}} disabled={movies.length == 0} onClick={handleCompleteOrder}>Finalizar Pedido</Button>

                <Div customStyles={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <Span customStyles={{textTransform: 'uppercase', fontWeight: '700'}}>Total</Span>
                    <Span customStyles={{color: 'black', fontSize: '1.5rem', fontWeight: '700'}}>{ getTotalPrice() }</Span>
                </Div>
            </Div>
        </>
    )
}