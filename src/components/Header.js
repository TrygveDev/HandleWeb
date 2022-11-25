import "../style/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Modal2 from "./Modal2";
import { useState } from "react";


function Header(props) {
    function handleClick() {
        toggleDisplayModal(true)
    }
    const [displayModal, setDisplayModal] = useState(false)
    function toggleDisplayModal(boolean) {
        setDisplayModal(boolean);
    }
    function newHeaderMoney(amount) {
        props.setMoney(amount)
    }

    return (
        <div className="container-header">
            <Modal2 displayModal={displayModal} toggleDisplayModal={toggleDisplayModal} newHeaderMoney={newHeaderMoney} />
            <div className="header-edit">
                <FontAwesomeIcon icon={faPenToSquare} size="2xl" onClick={handleClick} />
            </div>
            <div className="header">
                <h1>{props.money} kr</h1>
                <p>Dine Penger</p>
            </div>
        </div>

    );
}

export default Header;

