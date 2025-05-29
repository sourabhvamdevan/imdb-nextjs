
"use client"
export default function SearchBox(){
    const [searchParams, setSearchParams]= useState(false);
    const router =useRouter();

    

const handleSubmit=(e) =>{

   e.preventDefault();

   window.location.href=`/search/${search}`;

}

    return (

        <form className="flex gap-2" onSubmit={handleSubmit}>
<input type="text" placeholder ='Search keywords...'
className='w-full h-14 rounded-md placeholder-gray-500'
/>
<button className="text-amber-600" disabled={search=== ''} ></button>



        </form>
    )
}