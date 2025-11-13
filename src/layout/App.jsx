import React from "react";
import BotonReutilizable from "../components/botonopcion";

function Plantilla() {
    const handleRegistrarse = () => console.log("Registrarse clicked");
    const handleIniciarSesion = () => console.log("Iniciar sesión clicked");

    return (
        <main>
            <img src="" alt="" />
            <BotonReutilizable
                textopcion="Registrarse"
                onClick={handleRegistrarse}
                className="btn-primary"
            />
            <BotonReutilizable
                textopcion="Iniciar sesión"
                onClick={handleIniciarSesion}
                className="btn-secondary"
            />
            <BotonReutilizable
                textopcion="Ayuda"
                onClick={() => alert("Ayuda")}
                icon="/icons/help.svg"
            />
        </main>
    );
}

export default Plantilla;