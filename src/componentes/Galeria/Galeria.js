import './Galeria.css'
import Fotos from '../Fotos/Fotos'

import { Route } from 'wouter'


const Galeria = (prop) => {
    const {g} = prop
    return (
        <div className='galeria'>
            {g.map((gifUrl) => (
                
             <Fotos key={gifUrl} url={gifUrl}/>
            
            ))}
         
        </div>
    )             
}

export default Galeria