import React from 'react';

const Formulario = () => {
    return (
        <form>
            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label> Nombre Gasto</label>     
                <input 
                    type="text" 
                    placeholder="Ej. Transporte" 
                    className="u-full-width"
                />
            </div>

            <div className="campo">
                <label> Cantidad Gasto</label>     
                <input 
                    type="number" 
                    placeholder="Ej. 3000" 
                    className="u-full-width"
                />
            </div>

            <input 
                type="submit" 
                value="Agregar Gasto" 
                className="button-primary u-full-width"
            />

        </form>
    );
};

export default Formulario;