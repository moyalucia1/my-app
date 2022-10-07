import './index.css'
import { Link } from 'wouter'
const   Boton = (obj) => {
    const {titulo, ruta} = obj
    return (
        <div className="botones">
            <Link href={ruta}>{titulo}</Link>
        </div>
    )
}

export default Boton