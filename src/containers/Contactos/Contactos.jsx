import Body from "../../componentes/Body/Body";
import Header from "../../componentes/Header/Header";
import './Contactos.css'



const Contactos = () => {
    return (
        <div>
            <Header/>
            <div className="contactos__contenedor-formulario">
            <h1 className="llamanos">LLamanos al +54 114524456</h1>  
            <h2>Formulario de contacto</h2>
           
                 <form className="contactos__formulario">
                     <label>
                    *Name:
                    <input type="text" name="name" />
                    </label>
                    <br></br>
                    <label>
                        *Correo electronico:
                    <input type="text" name="correo" />
                    </label>
                    <br></br>
                    <label>
                        *Edad
                    <input type="text" name="edad" />
                    </label>
                    <br></br>
                    <label>
                        *Pais
                    <input type="text" name="pais" />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>

             
            </div>
            

        </div>
    )
}

export default Contactos