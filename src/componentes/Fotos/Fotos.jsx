
import './Fotos.css'
const Fotos = (prop) => {

    return (
        <div className='fotos'>
            <img src={prop.url} alt="foto"></img>
        </div>
    )
}

export default Fotos