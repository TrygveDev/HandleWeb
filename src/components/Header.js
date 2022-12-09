import "../style/header.css";
import "../style/inputModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Cookies from "js-cookie";

function Header(props) {
    const inputRef = useRef(null);
    const inputRefPlus = useRef(null);
    const inputRefMinus = useRef(null);
    let hasCheckedItem;
    function handleClick() {
        const groceryList = Cookies.get("groceryList") == null ? null : JSON.parse(Cookies.get("groceryList"))
        console.log(groceryList)
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
                        <div className='inputModal'>
                            <div className='inputModal-content'>
                                <h1>Hvor mye penger har du?</h1>
                                <input ref={inputRef} autoFocus placeholder="0" type="number"></input>
                                <div className='inputModal-buttons'>
                                    <button
                                        onClick={() => {
                                            onClose();
                                        }}
                                    >Avbryt</button>
                                    <button
                                        onClick={() => {
                                            if (inputRef.current.value.length > 5 || inputRef.current.value === "" || isNaN(inputRef.current.value.length)) {
                                                alert("Du kan bare sette pengene dine til hele tall som har maksimal lengde på 5!")
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
        } else {
            alert("Du kan ikke endre pengene dine når du har en avkrysset vare i listen din!")
        }

    }
    function handleClickPlus() {
        const groceryList = Cookies.get("groceryList") == null ? null : JSON.parse(Cookies.get("groceryList"))
        console.log(groceryList)
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
                        <div className='inputModal'>
                            <div className='inputModal-content'>
                                <h1>Hvor mye penger vil du legge til?</h1>
                                <input ref={inputRefPlus} autoFocus placeholder="0" type="number"></input>
                                <div className='inputModal-buttons'>
                                    <button
                                        onClick={() => {
                                            onClose();
                                        }}
                                    >Avbryt</button>
                                    <button
                                        onClick={() => {
                                            if (inputRefPlus.current.value.length > 5 || inputRefPlus.current.value === "" || isNaN(inputRefPlus.current.value.length)) {
                                                alert("Du kan bare sette pengene til hele tall som har maksimal lengde på 5!")
                                            } else {
                                                props.restoreMoney(inputRefPlus.current.value)
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
        } else {
            alert("Du kan ikke endre pengene dine når du har en avkrysset vare i listen din!")
        }

    }
    function handleClickMinus() {
        const groceryList = Cookies.get("groceryList") == null ? null : JSON.parse(Cookies.get("groceryList"))
        console.log(groceryList)
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
                        <div className='inputModal'>
                            <div className='inputModal-content'>
                                <h1>Hvor mye penger vil du trekke fra?</h1>
                                <input ref={inputRefMinus} autoFocus placeholder="0" type="number"></input>
                                <div className='inputModal-buttons'>
                                    <button
                                        onClick={() => {
                                            onClose();
                                        }}
                                    >Avbryt</button>
                                    <button
                                        onClick={() => {
                                            if (inputRefMinus.current.value.length > 5 || inputRefMinus.current.value === "" || isNaN(inputRefMinus.current.value.length)) {
                                                alert("Du kan bare sette pengene til hele tall som har maksimal lengde på 5!")
                                            } else {
                                                props.subtractMoney(inputRefMinus.current.value)
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
        } else {
            alert("Du kan ikke endre pengene dine når du har en avkrysset vare i listen din!")
        }

    }

    return (
        <div className="container-header">
            <div className="header">
                <div className="header-info">
                    <h1>{props.money} kr</h1>
                    <p>Dine Penger</p>
                </div>
                <div className="header-edit">
                    <FontAwesomeIcon icon={faMinus} size="2xl" onClick={handleClickMinus} />
                    <FontAwesomeIcon icon={faPenToSquare} size="2xl" onClick={handleClick} />
                    <FontAwesomeIcon icon={faPlus} size="2xl" onClick={handleClickPlus} />
                </div>
            </div>
        </div>

    );
}

export default Header;

