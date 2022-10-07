import Body from "../../componentes/Body/Body";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import './Nosotros.css'


const Nosotros = () => {
    return (
        <div>
            <Header/>
            <div id='App'>
                <h1>Nosotros nos encargamos de Encontrar los mejores GIFS</h1>
                <picture >
                    <div className="foto_nosotros">
                      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/lady_looking_at_computer.png?auto=format%2Ccompress&dpr=1&h=350&w=350"/>
                    </div>
                  
                </picture>
            </div>  
        
            <Footer/>

        </div>
    )
}

export default Nosotros