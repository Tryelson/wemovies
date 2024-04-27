import { MovieType } from "@/app/api/movies.interface";
import React, { createContext, useState } from "react";

export interface MovieInfo {
    movie: MovieType;
    quantity: number;
}

interface MovieContextType {
    movies: Array<MovieInfo>;
    addMovie: (movie: MovieType) => void;
    increaseQuantity: (movie: MovieInfo) => void;
    decreaseQuantity: (movie: MovieInfo) => void;
    removeMovie: (movie: MovieInfo) => void;
    completeOrder: () => void;
}

export const MovieContext = createContext<MovieContextType>({
    movies: [],
    addMovie: () => {},
    decreaseQuantity: () => {},
    increaseQuantity: () => {},
    removeMovie: () => {},
    completeOrder: () => {},
});

export default function MovieProvider({ children }: {children: React.ReactNode}){
    const [movies, setMovies] = useState<Array<MovieInfo>>([]);

    function addMovie(movie: MovieType) {
        const existingMovie = movies.find(item => item.movie.id === movie.id);

        if (existingMovie) {
            setMovies(prevMovies => {
                return prevMovies.map(item => {
                    if (item.movie.id === movie.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
            });
        } else {
            setMovies(prevMovies => [...prevMovies, { movie, quantity: 1 }]);
        }
    }

    function decreaseQuantity(item: MovieInfo) {
        const updatedMovies = movies.map(movieItem => {
            if (movieItem.movie.id === item.movie.id) {
                return { ...movieItem, quantity: movieItem.quantity - 1 };
            }

            return movieItem;
        });

        setMovies(updatedMovies);
    }

    function increaseQuantity(item: MovieInfo) {
        const updatedMovies = movies.map(movieItem => {
            if (movieItem.movie.id === item.movie.id) {
                return { ...movieItem, quantity: movieItem.quantity + 1 };
            }

            return movieItem;
        });

        setMovies(updatedMovies);
    }

    function removeMovie(item: MovieInfo) {
        const updatedMovies = movies.filter(movieItem => movieItem.movie.id !== item.movie.id);
        setMovies(updatedMovies);
    }

    function completeOrder(){
        setMovies([])
    }

    return (
        <MovieContext.Provider value={{ movies, addMovie, decreaseQuantity, increaseQuantity, removeMovie, completeOrder }}>
            {children}
        </MovieContext.Provider>
    );
}