import "../style/header.css";
import "../style/inputModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function Header(props) {
    const inputRef = useRef(null);
    function handleClick() {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='inputModal'>
                        <div className='inputModal-content'>
                            <h1>Hvor mye penger har du?</h1>
                            <input ref={inputRef} placeholder="0" type="number"></input>
                            <div className='inputModal-buttons'>
                                <button
                                    onClick={() => {
                                        onClose();
                                    }}
                                >Avbryt</button>
                                <button
                                    onClick={() => {
                                        if (inputRef.current.value.length > 5 || inputRef.current.value === "" || isNaN(inputRef.current.value.length)) {
                                            alert("Du kan bare sette penene dine til hele tall som har maksimal lengde på 5!")
                                        } else {
                                            props.setMoney(inputRef.current.value)
                                        }
                                        onClose();
                                    }}
                                >Ok</button>
                            </div>
                        </div>
                    </div >
                );
            }
        });
    }

    return (
        <div className="container-header">
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

