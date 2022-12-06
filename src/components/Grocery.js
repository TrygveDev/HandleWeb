import "../style/grocery.css";
import { useState } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function Grocery(props) {


    const [checked, setChecked] = useState(props.price === 0 ? false : true);
    function handleClick() {
        props.setGroceryIndexState(props.index)
        if (props.deleteMode) {
            props.deleteGrocery(props.index)
        } else {
            if (!checked) {
                props.toggleDisplayModal(true);
                checked ? setChecked(false) : setChecked(true);
            } else if (checked) {
                confirmAlert({
                    customUI: ({ onClose }) => {
                        return (
                            <div className="confirmModal">
                                <p>Vil du legge tilbake varen?</p>
                                <div className="confirmModal-btn">
                                    <button onClick={onClose}>Nei</button>
                                    <button onClick={() => {
                                        checked ? setChecked(false) : setChecked(true);
                                        props.restoreMoneyFromModal(props.price)
                                        props.removeGroceryCost(props.index)
                                        onClose();
                                    }}>Ja</button>
                                </div>
                            </div>
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

