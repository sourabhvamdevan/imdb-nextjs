

export default async function MoviePage({params}){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId} ?api_key=${API_KEY}`)



const movie =await res.json();


    return(
        <div className='w-full'>

            <div className="">
            <Image></Image>

            </div>

            <div className="">

                <h2>{movie.title||movie.name}</h2>
                <p>{movie.overview}</p>
                <p>{movie.release|| movie.first_air_date}</p>
            </div>
            
        </div>
    )
}