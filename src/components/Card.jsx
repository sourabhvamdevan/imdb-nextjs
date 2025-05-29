

  import { FiThumbsUp } from 'react-icons/fi';





export default function Card({results}){
    return(
        <div className='group'>
   
<Link href={`/movie/${results.id}`}>

<Image src = {`https://image.tmdb.org/t/p/w500${results.poster_path}`}>

</Image>



</Link>
<div className="">

<p className='line-clamp-2 text-md'>{results.overview}</p>
<h2>{result.title||result.original_name}</h2>

<p>

    {result.release_date||result.first_air_date}

    <FiThumbsUp>


{result.vote_count}

</FiThumbsUp>

</p>



</div>



        </div>
    )
}