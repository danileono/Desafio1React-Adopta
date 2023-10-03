import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GalleryCards from './components/galleryCards'



const data = {
  title: "ADOPTA UNA LLAMA",

  llamas: [
    {
    link: './imgs/llama-1.jpg',
    name: 'Llama 1',
    description: 'LLama con actitud misteriosa',
    country: 'Perú',
    tag: { textoLlama: "ADOPTA AHORA", color: "danger" },
  },
    {
    link: './imgs/llama-2.jpg',
    name: 'Llama 2',
    description: 'LLama exagerada gritandooooo',
    country: 'Argentina',
    tag: { textoLlama: "ADOPTA AHORA", color: "danger" },
  },
    {
    link: './imgs/llama-3.jpg',
    name: 'Llama 3',
    description: 'LLama outdoor con lentes muy nice',
    country: 'Perú',
    tag: { textoLlama: "ADOPTA HORA", color: "danger" },
  }
  ]
}


function App() {

  return (
    <div>
        <Header title={data.title}></Header>

        <main>
        <GalleryCards llamas={data.llamas}></GalleryCards>
        </main>

        <Footer></Footer>
    </div>
  )
}

export default App
