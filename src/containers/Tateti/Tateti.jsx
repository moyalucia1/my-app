import Footer from "../../componentes/Footer/Footer"
import Header from "../../componentes/Header/Header"
import {useState, useEffect} from 'react'
import './Tateti.css'
import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils"


const Tateti =() => {
  console.log('hola me renderice')
  const [estado1, cambiarEstado1] = useState ('')
  const [estado2, cambiarEstado2] = useState ('')
  const [estado3, cambiarEstado3] = useState ('')
  const [estado4, cambiarEstado4] = useState ('')
  const [estado5, cambiarEstado5] = useState ('')
  const [estado6, cambiarEstado6] = useState ('')
  const [estado7, cambiarEstado7] = useState ('')
  const [estado8, cambiarEstado8] = useState ('')
  const [estado9, cambiarEstado9] = useState ('')
  const [jugador1, setJugador1] = useState ()
  const [jugador2, setJugador2] = useState ()
  const [turno, setTurno] = useState ("x")
  const [ganador, setGanador] = useState ('')

  const empate = () =>{}
  
  useEffect(()=>{
    // inicializar juego
    setTurno('x', 'o')
    setJugador1({ puntage: 0, equipo:"x"})
    setJugador2({ puntage: 0, equipo:"o"}) //async tarda!!!
    empate()

  }, [])



  useEffect(()=>{
    try {
    if (turno === 'o') {
      setTurno('x')
    }
    if (turno === 'x') {
      setTurno('o')
    }
    // ver si alguien gano
      if(ganador) return
       
      if ( jugador1 && estado1 === jugador1.equipo && estado2 ===  jugador1.equipo &&  estado3 === jugador1.equipo ){
        setGanador('gano jugador 1')
        setJugador1((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if ( jugador2 && estado1 === jugador2.equipo && estado2 ===  jugador2.equipo &&  estado3 === jugador2.equipo ){
        setGanador('gano jugador 2')
        setJugador2((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador1 && estado4 === jugador1.equipo && estado5 === jugador1.equipo && estado6 === jugador1.equipo){
       setGanador('gano jugador 1')
       setJugador1((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador2 && estado4 === jugador2.equipo && estado5 === jugador2.equipo && estado6 === jugador2.equipo){
        setGanador('gano jugador 2')
        setJugador2((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
       }
      if (jugador1 && estado7 === jugador1.equipo && estado8 === jugador1.equipo && estado9 === jugador1.equipo){
       setGanador('gano jugador 1') 
       setJugador1((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador2 && estado7 === jugador2.equipo && estado8 === jugador2.equipo && estado9 === jugador2.equipo){
        setGanador('gano jugador 2') 
        setJugador2((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
       }
      if (jugador1 && estado1 === jugador1.equipo && estado4 === jugador1.equipo && estado7 === jugador1.equipo){
        setGanador('gano jugador 1 ')
        setJugador1((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador2 && estado1 === jugador2.equipo && estado4 === jugador2.equipo && estado7 === jugador2.equipo){
        setGanador('gano jugador 2')
        setJugador2((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador1 && estado2 === jugador1.equipo && estado5 === jugador1.equipo && estado8 === jugador1.equipo){
        setGanador('gano jugador 1 ')
        setJugador1((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador2 && estado2 === jugador2.equipo && estado5 === jugador2.equipo && estado8 === jugador2.equipo){
        setGanador('gano jugador 2 ')
        setJugador2((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador1 && estado3 === jugador1.equipo && estado6 === jugador1.equipo && estado9 === jugador1.equipo){
        setGanador('gano jugador 1 ')
        setJugador1((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador2 && estado3 === jugador2.equipo && estado6 === jugador2.equipo && estado9 === jugador2.equipo){
        setGanador('gano jugador 2 ')
        setJugador2((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador2 && estado1 === jugador2.equipo && estado5 === jugador2.equipo && estado9 === jugador2.equipo){
        setGanador('gano jugador 1 ')
        setJugador2((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador1 && estado1 === jugador1.equipo && estado5 === jugador1.equipo && estado9 === jugador1.equipo){
        setGanador('gano jugador 1 ')
        setJugador1((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador2 && estado1 === jugador2.equipo && estado5 === jugador2.equipo && estado9 === jugador2.equipo){
        setGanador('gano jugador 2')
        setJugador2((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador1 && estado3 === jugador1.equipo && estado5 === jugador1.equipo && estado7 === jugador1.equipo){
        setGanador('gano jugar 1')
        setJugador1((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
      if (jugador2 && estado3 === jugador2.equipo && estado5 === jugador2.equipo && estado7 === jugador2.equipo){
        setGanador('gano jugar 2')
        setJugador2((estadoAnterior)=> {return {...estadoAnterior, puntage: estadoAnterior.puntage + 1 }})
      }
    } catch (error){
      console.log(error)
    }
  }, [estado1,estado2,estado3,estado4,estado5,estado6,estado7,estado8,estado9])
  
  const reset = () =>{
    setGanador('')
    cambiarEstado1('')
    cambiarEstado2('')
    cambiarEstado3('')
    cambiarEstado4('')
    cambiarEstado5('')
    cambiarEstado6('')
    cambiarEstado7('')
    cambiarEstado8('')
    cambiarEstado9('')
  }  

  return ( 
    <div>
    
        <Header/>
        <div>
          <h1>Tateti turno {turno} </h1>
          <h1>x puntos: {jugador1 ? jugador1.puntage : 0}</h1>
          <h1>o puntos: {jugador2 ? jugador2.puntage : 0}</h1>
          <h1>{ganador}</h1>
          <div className="container__tateti">
              <div onClick={()=>{if (!estado1 && !ganador)cambiarEstado1(turno)}} className="contenedor__1">
                <h2>{estado1}</h2>
              </div>

              <div onClick={()=>{if (!estado2 && !ganador)cambiarEstado2(turno)}} className="contenedor__2">
                 <h2>{estado2} </h2>
              </div>

              <div onClick={()=>{if (!estado3 && !ganador)cambiarEstado3(turno)}} className="contenedor__3" >
                <h2>{estado3} </h2>
              </div>

              <div onClick={()=>{if (!estado4 && !ganador)cambiarEstado4(turno)}} className="contenedor__4">
                <h2>{estado4} </h2>
              </div>

              <div onClick={()=>{if (!estado5 && !ganador)cambiarEstado5(turno)}} className="contenedor__5">
                <h2>{estado5} </h2>
              </div>

              <div onClick={()=>{if (!estado6 && !ganador)cambiarEstado6(turno)}} className="contenedor__6">
                <h2>{estado6} </h2>
              </div>

              <div onClick={()=>{if (!estado7 && !ganador)cambiarEstado7(turno)}} className="contenedor__7">
                <h2>{estado7} </h2>
              </div>
              <div onClick={()=>{if (!estado8 && !ganador)cambiarEstado8(turno)}} className="contenedor__8">
                <h2>{estado8} </h2>
              </div>

              <div onClick={()=>{if (!estado9 && !ganador)cambiarEstado9(turno)}} className="contenedor__9">
                <h2>{estado9} </h2>
              </div>
              
            </div>
        </div>
           
          <button className="boton_reset" onClick={()=>{reset()}}>RESET</button>
           <Footer/>
    </div>
    )
    }

export default Tateti