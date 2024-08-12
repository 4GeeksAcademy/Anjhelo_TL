import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [color, setBlow] = useState("");
	const [activado, setActivado] = useState(false)

	function cambiarColor()
	{
		if(color == "")
		{
			setBlow("amarillo");
		}
		else if(color == "amarillo")
		{
			setBlow("verde");
		}
		else if(color == "verde")
		{
			setBlow("rojo")
		}
		else{
			setBlow("amarillo")
		}
	}
	return (
		<div className="container-fluid w-100">
			<div className="bg-black mx-auto " style={{width: "20px", height: "100px"}}></div>
            <div className="bg-black p-3 mx-auto d-grid rounded-4" style={{width: "150px", alignContent:"center"}}>
                <div
                    className="border-0 rounded-circle bg-danger my-2 mx-auto"
                    style={{width: "100px", height: "100px", boxShadow: (color === "rojo" ? "0 0 50px yellow" : "none")}}
					onClick={() => setBlow("rojo")}></div>
                    
                <div
                    className="border-0 rounded-circle bg-warning my-2 mx-auto"
                    style={{ width: "100px", height: "100px", boxShadow:(color === "amarillo" ? "0 0 50px yellow" : "none") }}
                	onClick={() => setBlow("amarillo")}></div>
                <div
                    className="border-0 rounded-circle bg-success my-2 mx-auto"
                    style={{ width: "100px", height: "100px", boxShadow:(color === "verde" ? "0 0 50px yellow" : "none")}}
					onClick={() => setBlow("verde")}></div>

				<div
                    className="border-0 rounded-circle my-2 mx-auto"
                    style={{ background:"purple" ,width: "100px", height: "100px", boxShadow:(color === "purpura" ? "0 0 50px yellow" : "none")}}
					hidden={activado == false}
					onClick={() => setBlow("purpura")}></div>
		

			<button onClick={cambiarColor}>Cambiar</button>
			<button onClick={() => setActivado(true)}>Agregar</button>
			<button onClick={() => setActivado(false)}>Eliminar</button>
            </div>
        </div>
	);
};

export default Home;
