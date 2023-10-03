import MyCard from "./MyCard"

const GalleryCards = ({ llamas })=> {
    return(
    <div className='galleryCards'>
        <MyCard llama={llamas[0]}></MyCard>
        <MyCard llama={llamas[1]}></MyCard>
        <MyCard llama={llamas[2]}></MyCard>
    </div>
    )
    }
    
export default GalleryCards
