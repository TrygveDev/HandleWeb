import "../style/grocery.css";
import "../style/confirmModal.css";
import { useRef, useState } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function Grocery(props) {
    const inputRef = useRef(null);
    const [checked, setChecked] = useState(props.price === 0 ? false : true);
    function handleClick() {
        if (props.deleteMode) {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='confirmModal'>
                            <div className='confirmModal-content'>
                                <h1>Vil du fjerne varen?</h1>
                                <div className='confirmModal-buttons'>
                                    <button
                                        onClick={() => {
                                            onClose();
                                        }}
                                    >Nei</button>
                                    <button
                                        onClick={() => {
                                            props.deleteGrocery(props.index)
                                            onClose();
                                        }}
                                    >Ja</button>
                                </div>
                            </div>
                        </div >
                    );
                }
            });
        } else {
            if (!checked) {
                confirmAlert({
                    customUI: ({ onClose }) => {
                        return (
                            <div className='inputModal'>
                                <div className='inputModal-content'>
                                    <h1>Hvor mye kostet varen?</h1>
                                    <input ref={inputRef} autoFocus placeholder="0" type="number"></input>
                                    <div className='inputModal-buttons'>
                                        <button
                                            onClick={() => {
                                                setChecked(false)
                                                onClose();
                                            }}
                                        >Avbryt</button>
                                        <button
                                            onClick={() => {
                                                if (inputRef.current.value.length > 5 || inputRef.current.value === "" || isNaN(inputRef.current.value.length)) {
                                                    alert("Du kan bare sette prisen til hele tall som har maksimal lengde på 5!")
                                                } else {
                                                    setChecked(true)
                                                    props.subtractMoneyFromModal(inputRef.current.value)
                                                    props.setGroceryCost(inputRef.current.value, props.index)
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
            } else if (checked) {
                confirmAlert({
                    customUI: ({ onClose }) => {
                        return (
                            <div className='confirmModal'>
                                <div className='confirmModal-content'>
                                    <h1>Vil du legge tilbake varen?</h1>
                                    <div className='confirmModal-buttons'>
                                        <button
                                            onClick={() => {
                                                onClose();
                                            }}
                                        >Nei</button>
                                        <button
                                            onClick={() => {
                                                props.restoreMoneyFromModal(props.price)
                                                props.removeGroceryCost(props.index);
                                                setChecked(false)
                                                onClose();
                                            }}
                                        >Ja</button>
                                    </div>
                                </div>
                            </div >
                        );
                    }
                });
            }
        }
    }
    return (
        <div className={checked ? "grocery-item checked" : "grocery-item"} onClick={handleClick}>
            <div className="item-title">{props.title}</div>
            <div className="item-price">{props.price === null || props.price === 0 ? "" : props.price + " kr"}</div>
        </div>

    );
}

export default Grocery;

