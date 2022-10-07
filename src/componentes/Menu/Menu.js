import Boton from "../Boton"
import './Menu.css'


const Menu= () => {
  const menu = {
    boton1: 'home',
    boton2: 'contacto',
    boton3: 'nosotros',
    boton4: 'tateti'

  }
    return (
        <div className="menu-botones">
           <Boton ruta='/' titulo ={menu.boton1}/> 
           <Boton ruta='/contactos' titulo = {menu.boton2}/>
           <Boton ruta='/nosotros' titulo = {menu.boton3}/>
           <Boton ruta='/tateti' titulo= {menu.boton4}/>
           
           
        </div>
    )
}

export default Menu