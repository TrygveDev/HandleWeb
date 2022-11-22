import { useState } from "react";
import "../style/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


function Header() {
    const [balance, setBalance] = useState(0);

    function handleClick() {
        setBalance(10)
    }

    return (
        <div className="container-header">
            <div className="header-edit">
                <FontAwesomeIcon icon={faPenToSquare} size="2xl" onClick={handleClick} />
            </div>
            <div className="header">
                <h1>{balance} kr</h1>
                <p>Dine Penger</p>
            </div>
        </div>

    );
}

export default Header;

