import './Body.css'
import Aside from '../Header/Aside';
import Galeria from '../Galeria/Galeria';
import {useEffect, useState } from 'react';
import getGifs from '../services/getGifs';


function Body(prop) {
    const [keyword, setKeyword] = useState('rick')
    console.log('renderizar')
    const [totalState, setTotalState] = useState(1);
    const [gifs, setGifs] = useState([])
    useEffect(function () {
        getGifs({keyword, totalState})
        .then(g => setGifs(g))
    }, [keyword, totalState])


    
    const sumar = () => {
    const total = totalState + 1;
    setTotalState(total);
    }

    const restar = () => {
    const total = totalState - 1;
    setTotalState(total);
    }
    return (
        <div className='body-containers'>
            <h1 className='titulo-hileret'>Gifs@Point</h1>
            <button type="button" onClick={() => {sumar()}}>mas gifs</button>
            <button type="button" onClick={() => {restar()}}>menos gifs</button>
            <input className='boton__buscador' type= 'text' onKeyUp={(evento) => {setKeyword(evento.target.value)}} placeholder='BUSCAR-GIFS'></input>
           <div className='body-cuerpo'>  
                <Galeria g={gifs}/>
                <Aside/>   
           </div>
                
        </div>
    )
}

export default Body