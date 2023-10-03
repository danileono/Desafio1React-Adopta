import Tags from './Tags'

const MyCard = ({ llama })=> {
    return(
<div className="card">
    <img src={llama.link} />
    <h2>{llama.name}</h2>
    <h3>{llama.description}</h3>
    <h3>País: {llama.country}</h3>
    <a href='#'>
        <Tags className="buttontag" texto={llama.tag.textoLlama} color={llama.tag.color} />
    </a>
</div>
    )
    }
    
export default MyCard
