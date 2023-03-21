import "../style/header.css";
import "../style/inputModalMultiple.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Cookies from "js-cookie";

function Header(props) {
    const inputRef = useRef(null);
    let hasCheckedItem;
    function handleClick() {
        const groceryList = Cookies.get("groceryList") == null ? null : JSON.parse(Cookies.get("groceryList"))
        hasCheckedItem = false
        if (Object.values(groceryList).length !== 0) {
            Object.values(groceryList).forEach((item) => {
                if (item.price !== 0) {
                    hasCheckedItem = true
                }
            })
        }
        if (!hasCheckedItem) {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='inputModalMultiple'>
                            <div className='inputModalMultiple-content'>
                                <h1>Endre dine penger.</h1>
                                <input ref={inputRef} autoFocus placeholder="0" type="number"></input>
                                <div className='inputModalMultiple-buttons'>
                                    <button
                                        onClick={() => {
                                            if (inputRef.current.value.length > 5 || inputRef.current.value === "" || isNaN(inputRef.current.value.length)) {
                                                alert("Du kan bare trekke fra hele tall som har maksimal lengde på 5!")
                                            } else {
                                                props.subtractMoney(inputRef.current.value)
                                            }
                                            onClose();
                                        }}
                                    ><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                                    <button
                                        onClick={() => {
                                            if (inputRef.current.value.length > 5 || inputRef.current.value === "" || isNaN(inputRef.current.value.length)) {
                                                alert("Du kan bare legge til hele tall som har maksimal lengde på 5!")
                                            } else {
                                                props.setMoney(inputRef.current.value)
                                            }
                                            onClose();
                                        }}
                                    >Sett</button>
                                    <button
                                        onClick={() => {
                                            if (inputRef.current.value.length > 5 || inputRef.current.value === "" || isNaN(inputRef.current.value.length)) {
                                                alert("Du kan bare sette pengene til hele tall som har maksimal lengde på 5!")
                                            } else {
                                                props.restoreMoney(inputRef.current.value)
                                            }
                                            onClose();
                                        }}
                                    ><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>

                                </div>
                                <button className="inputModalMultiple-buttons-cancel"
                                    onClick={() => {
                                        onClose();
                                    }}
                                >Tilbake</button>
                            </div>
                        </div >
                    );
                }
            });
        } else {
            alert("Du kan ikke endre pengene dine når du har en avkrysset vare i listen din!")
        }

    }

    return (
        <div className="container-header">

            <div className="header">
                <div className="header-info">
                    <h1 onClick={handleClick} className={props.money < 0 ? "cantAfford" : "canAfford"}>{props.money} kr</h1>
                    <p>Dine Penger</p>
                    <FontAwesomeIcon onClick={handleClick} className="header-edit" icon={faPenToSquare} size="2xl" />
                </div>

            </div>
        </div>

    );
}

export default Header;