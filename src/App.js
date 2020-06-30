import React, {  useState } from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {

  //definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  //Cuando agreguemos un nuevo gasto
  const setNuevoGasto = gasto => {
    setGastos([
      ...gastos,
      gasto
    ]);
  }


  return (
		<div className="container">
			<header>
				<h1>Gasto Semanal</h1>

				<div className="contenido-principal contenido">
					{mostrarpregunta ? (
						<Pregunta
							setPresupuesto={setPresupuesto}
							setRestante={setRestante}
							actualizarPregunta={actualizarPregunta}
						/>
					) : (
						<div className="row">
							<div className="one-half column">
                <Formulario 
                  setNuevoGasto={setNuevoGasto} 
                />
							</div>
							<div className="one-half column">
                <Listado 
                  gastos = {gastos}
                />
              </div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
