

export default function Navbar(){
    return(


<div className='flex dark:bg-amber-600 bg-amber-100 p-4 lg:text-lg
justify-center gap-4'>

<NavbarItem title="Trending" param="fetchTrending"/>
<NavbarItem title="Top Rated" param="fetchTopRated"/>
<NavbarItem/>


        </div>
    )
}