import React, {  useState, useEffect } from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {

  //definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(() => {
    
    if (creargasto) {

      //Agrega el Nuevo Presupuesto
      setGastos([
        ...gastos,
        gasto
      ]);

      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      //Resetear a False
      guardarCrearGasto(false);
    }
    
  }, [gasto])



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
                  guardarGasto={guardarGasto} 
                  guardarCrearGasto={guardarCrearGasto}
                />
							</div>
							<div className="one-half column">
                <Listado 
                  gastos = {gastos}
                />

                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
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
