import Card from './Card';


export default function Results({results}){
    return(
        <div className='sm:grid sm:grid-cols-2'>

{results.map(results=>{
    <Card key={results.id}/>
})}







     </div>
        
    




    )
}