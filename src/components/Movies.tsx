'use client'

import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import EmptyPage from "./EmptyPage"
import Movie from "./Movie"
import useMovies from "@/app/api/useMovies"
import { MovieType } from "@/app/api/movies.interface"
import Flex from "./tags/Flex"

export default function Movies(){

    const { getAllMovies } = useMovies()
    const [movies, setMovies] = useState<Array<MovieType>>([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchMovies(){
        setIsLoading(true)
        const response = await getAllMovies()

        setMovies(response.movies)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            {isLoading && (<Spinner customStyles={{margin: '0 auto'}} />)}
            {!isLoading && movies.length == 0 && (<EmptyPage />)}

            {!isLoading && movies.length > 0 && (
                <Flex customStyles={{justifyContent: 'center', flexWrap: 'wrap', gap: '24px 16px'}}>
                    {movies.map((movie) => {
                        return (
                            <Movie
                                key={movie.id}
                                movie={movie}
                            />
                        )
                    })}
                </Flex>
            )}
        </>
    )
}