import React from "react";

function BotonReutilizable({ textopcion, onClick, icon, className = "" }) {
    return (
        <button className={className} onClick={onClick}>
            {icon && <img src={icon} alt="" />}
            {textopcion}
        </button>
    );
}

export default BotonReutilizable;