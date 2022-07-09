import React  from "react";
import styles from './formulario.module.css';
import useSelect from "../hooks/useSelect";
import PropTypes from 'prop-types';


const Formulario= ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'}
    ]

    //aca uso custom hook
    const [categoria,SelectNoticias] = useSelect("general",OPCIONES);

    //cuando el usuario hace submit al formulario
    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    };
   
    return (
    <div className={`${styles.buscador} row`}>
        <div className="col s12 m8 offset-m2">
            <form 
            onSubmit={buscarNoticias}
            >
                
            <h2 className={styles.heading}>Seleccioná la Categoría...</h2>
            <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type= "submit"
                            className= {`${styles.btn_block} btn-large blue darken-2`}
                            value= "Ver Noticias 🔥"

                        />

                       
                    </div>   
            </form>
                   
        </div>        
    </div>
    
    );
}
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired //esto es una funcion que se le pasa por props
}

export default Formulario;