export default function useMovies(){

    const mockedData = [
        { id: 1, title: "Viúva Negra", price: 9.99, image: "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png" },
        { id: 2, title: "Shang-chi", price: 30.99, image: "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png" },
        { id: 3, title: "Homem Aranha", price: 29.9, image: "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png" },
        { id: 5, title: "Morbius", price: 1.5, image: "https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png" },
        { id: 6, title: "Batman", price: 21.9, image: "https://wefit-react-web-test.s3.amazonaws.com/the-batman.png" },
        { id: 4, title: "Eternos", price: 17.9, image: "https://wefit-react-web-test.s3.amazonaws.com/eternals.png" }
    ];

    async function getAllMovies(){
        try {
            // aqui a endpoint/api poderia ser puxado de uma variavel de ambiente pelo arquivo .env.local
            const response = await fetch(`https://wefit-movies.vercel.app/api/movies`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            const data = await response.json();
    
            if(data){
                return {movies: data, message: 'Sucesso!'};
            } else {
                return {movies: mockedData, message: "Server error!"}
            }
        } catch (error) {
            const errorResponse = {
                movies: mockedData,
                success: false,
                message: 'Server error!',
            };
    
            return errorResponse;
        }
    }

    return { getAllMovies }
}