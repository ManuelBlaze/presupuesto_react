import React, { Fragment, useState } from 'react';
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, actualizarPregunta }) => {

    //definir state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //Funcion que lee el presupuesto
    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value, 10));
    }

    //Submit para definir presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        //si pasa la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        actualizarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number" 
                    name="presupuesto" 
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit" 
                    value="Definir Presupuesto" 
                    className="button-primary u-full-width"
                />
            </form>
        </Fragment>
    );
};

export default Pregunta;