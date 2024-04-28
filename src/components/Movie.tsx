import Button from "./tags/Button";
import Image from "./tags/Image";
import Span from "./tags/Span";
import Card from "./Card";
import { priceFormatter } from "../utils/priceFormatter";
import { useContext } from "react";
import { MovieContext } from "../context/cart";
import { MovieType } from "@/app/api/movies.interface";
import AddCart from "../../public/AddCart";
import Flex from "./tags/Flex";

interface MovieProps{
    movie: MovieType;
}

export default function Movie({ movie }: MovieProps){

    const { movies, addMovie } = useContext(MovieContext)

    function getTotalMovies() {
        const foundMovie = movies.find(item => item.movie.id === movie.id);
        return foundMovie ? foundMovie.quantity : 0;
    }
    
    function hasMovieIntoCart(){
        const foundMovie = movies.find(item => item.movie.id === movie.id);
        return foundMovie
    }

    function addMovieToCart(){
        addMovie(movie)
    }

    return (
        <Card className="fadeIn">
            <Image src={movie.image} alt={movie.title} width={147} height={188} />

            <Span customStyles={{color: 'black', fontWeight: '700', fontSize: '0.75rem'}}>{ movie.title }</Span>
            <Span customStyles={{color: 'black', fontWeight: '700', fontSize: '1rem'}}>{ priceFormatter(movie.price) }</Span>

            <Button onClick={addMovieToCart} customStyles={{textTransform: 'uppercase', maxWidth: '100%', fontWeight: 700, display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'center', backgroundColor: hasMovieIntoCart() ? '#039B00' : ''}}>
                <Flex customStyles={{width: 'fit-content', gap: '3px'}}>
                    <AddCart />
                    {getTotalMovies()} 
                </Flex>

                Adicionar ao carrinho
            </Button>
        </Card>
    )
}