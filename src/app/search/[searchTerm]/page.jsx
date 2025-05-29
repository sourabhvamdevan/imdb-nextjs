

export default async function SearchPage({params}){

    const searchTerm=params.searchTerm;
  const res =await fetch('https://api.themoviedb.org/3/search/movie?query=${ process.env.API_KEY}')

    return (

        <div>


        </div>
    )
}