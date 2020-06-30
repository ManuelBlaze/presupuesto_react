import React, { Fragment } from 'react';

const Pregunta = () => {
    return (
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            <form>
                <input 
                    type="number" 
                    name="presupuesto" 
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
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