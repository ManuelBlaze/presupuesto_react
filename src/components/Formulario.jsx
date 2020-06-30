import React, { useState } from 'react';
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
	const [nombre, setNombre] = useState("");
	const [cantidad, setCantidad] = useState("");
	const [error, setError] = useState(false);

	//Cuando el usuario agrega un gasto
	const setGasto = (e) => {
		e.preventDefault();

		//Validar
		if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
			setError(true);
			return;
		}
		setError(false);

		//Construir el gasto
		const gasto = {
			nombre,
			cantidad,
			id: shortid.generate(),
		};

		//Pasar al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

		//Resetear Form
		setNombre("");
		setCantidad("");
	};

	return (
		<form onSubmit={setGasto}>
			<h2>Agrega tus gastos aquí</h2>

			{error ? (
				<Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
			) : null}

			<div className="campo">
				<label> Nombre Gasto</label>
				<input
					type="text"
					placeholder="Ej. Transporte"
					className="u-full-width"
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
				/>
			</div>

			<div className="campo">
				<label> Cantidad Gasto</label>
				<input
					type="number"
					placeholder="Ej. 3000"
					className="u-full-width"
					value={cantidad}
					onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
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


Formulario.propTypes = {
    guardarGasto : PropTypes.func.isRequired,
    guardarCrearGasto : PropTypes.func.isRequired
}

export default Formulario;